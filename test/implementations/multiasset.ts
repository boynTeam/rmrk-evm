import { Contract } from 'ethers';
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import shouldBehaveLikeMultiAsset from '../behavior/multiasset';
import shouldBehaveLikeOwnableLock from '../behavior/ownableLock';
import shouldControlValidMinting from '../behavior/mintingImpl';
import shouldHaveMetadata from '../behavior/metadata';
import shouldHaveRoyalties from '../behavior/royalties';
import {
  addAssetEntryFromImpl,
  addAssetToToken,
  ADDRESS_ZERO,
  mintFromImpl,
  ONE_ETH,
  singleFixtureWithArgs,
} from '../utils';
import { IERC721 } from '../interfaces';

async function singleFixture(): Promise<{ token: Contract; renderUtils: Contract }> {
  const renderUtilsFactory = await ethers.getContractFactory('RMRKMultiAssetRenderUtils');
  const renderUtils = await renderUtilsFactory.deploy();
  await renderUtils.deployed();

  const token = await singleFixtureWithArgs('RMRKMultiAssetImpl', [
    'MultiAsset',
    'MR',
    10000,
    ONE_ETH,
    'ipfs://collection-meta',
    'ipfs://tokenURI',
    ADDRESS_ZERO,
    1000, // 10%
  ]);
  return { token, renderUtils };
}

describe('MultiAssetImpl Other Behavior', async () => {
  let token: Contract;

  let owner: SignerWithAddress;

  const defaultAsset1 = 'default1.ipfs';
  const defaultAsset2 = 'default2.ipfs';

  const isOwnableLockMock = false;

  beforeEach(async function () {
    owner = (await ethers.getSigners())[0];
  });

  describe('Deployment', async function () {
    beforeEach(async function () {
      ({ token } = await loadFixture(singleFixture));
      this.token = token;
    });

    it('can support IERC721', async function () {
      expect(await token.supportsInterface(IERC721)).to.equal(true);
    });

    shouldBehaveLikeOwnableLock(isOwnableLockMock);

    it('Can mint tokens through sale logic', async function () {
      await mintFromImpl(token, owner.address);
      expect(await token.ownerOf(1)).to.equal(owner.address);
      expect(await token.totalSupply()).to.equal(1);
      expect(await token.balanceOf(owner.address)).to.equal(1);

      await expect(
        token.connect(owner).mint(owner.address, 1, { value: ONE_ETH.div(2) }),
      ).to.be.revertedWithCustomError(token, 'RMRKMintUnderpriced');
      await expect(
        token.connect(owner).mint(owner.address, 1, { value: 0 }),
      ).to.be.revertedWithCustomError(token, 'RMRKMintUnderpriced');
    });

    it('Can mint multiple tokens through sale logic', async function () {
      await token.connect(owner).mint(owner.address, 10, { value: ONE_ETH.mul(10) });
      expect(await token.totalSupply()).to.equal(10);
      expect(await token.balanceOf(owner.address)).to.equal(10);
      await expect(
        token.connect(owner).mint(owner.address, 1, { value: ONE_ETH.div(2) }),
      ).to.be.revertedWithCustomError(token, 'RMRKMintUnderpriced');
      await expect(
        token.connect(owner).mint(owner.address, 1, { value: 0 }),
      ).to.be.revertedWithCustomError(token, 'RMRKMintUnderpriced');
    });
  });
});

describe('MultiAssetImpl MR behavior', async () => {
  beforeEach(async function () {
    const { token, renderUtils } = await loadFixture(singleFixture);
    this.token = token;
    this.renderUtils = renderUtils;
  });

  shouldBehaveLikeMultiAsset(mintFromImpl, addAssetEntryFromImpl, addAssetToToken);
});

describe('MultiAssetImpl Other', async function () {
  beforeEach(async function () {
    const { token } = await loadFixture(singleFixture);
    this.token = token;
  });

  shouldControlValidMinting();
  shouldHaveRoyalties(mintFromImpl);
  shouldHaveMetadata(mintFromImpl);
});