# RMRKNestableMultiAsset

*RMRK team*

> RMRKNestableMultiAsset

Smart contract of the joined RMRK Nestable and Multi asset module.



## Methods

### VERSION

```solidity
function VERSION() external view returns (string)
```

Version of the @rmrk-team/evm-contracts package




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### acceptAsset

```solidity
function acceptAsset(uint256 tokenId, uint256 index, uint64 assetId) external nonpayable
```

Accepts an asset from the pending array of given token.

*Migrates the asset from the token&#39;s pending asset array to the token&#39;s active asset array.Active assets cannot be removed by anyone, but can be replaced by a new asset.Requirements:  - The caller must own the token or be approved to manage the token&#39;s assets  - `tokenId` must exist.  - `index` must be in range of the length of the pending asset array.Emits an {AssetAccepted} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token for which to accept the pending asset |
| index | uint256 | Index of the asset in the pending array to accept |
| assetId | uint64 | ID of the asset expected to be located at the specified index |

### acceptChild

```solidity
function acceptChild(uint256 parentId, uint256 childIndex, address childAddress, uint256 childId) external nonpayable
```

@notice Used to accept a pending child token for a given parent token.

*This moves the child token from parent token&#39;s pending child tokens array into the active child tokens  array.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| parentId | uint256 | ID of the parent token for which the child token is being accepted |
| childIndex | uint256 | Index of a child tokem in the given parent&#39;s pending children array |
| childAddress | address | Address of the collection smart contract of the child token expected to be located at the  specified index of the given parent token&#39;s pending children array |
| childId | uint256 | ID of the child token expected to be located at the specified index of the given parent token&#39;s  pending children array |

### addChild

```solidity
function addChild(uint256 parentId, uint256 childId, bytes data) external nonpayable
```

Used to add a child token to a given parent token.

*This adds the iichild token into the given parent token&#39;s pending child tokens array.Requirements:  - `ownerOf` on the child contract must resolve to the called contract.  - The pending array of the parent contract must not be full.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| parentId | uint256 | ID of the parent token to receive the new child token |
| childId | uint256 | ID of the new proposed child token |
| data | bytes | Additional data with no specified format |

### approve

```solidity
function approve(address to, uint256 tokenId) external nonpayable
```



*Gives permission to `to` to transfer `tokenId` token to another account. The approval is cleared when the token is transferred. Only a single account can be approved at a time, so approving the zero address clears previous approvals. Requirements: - The caller must own the token or be an approved operator. - `tokenId` must exist. Emits an {Approval} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| tokenId | uint256 | undefined |

### approveForAssets

```solidity
function approveForAssets(address to, uint256 tokenId) external nonpayable
```

Used to grant permission to the user to manage token&#39;s assets.

*This differs from transfer approvals, as approvals are not cleared when the approved party accepts or  rejects an asset, or sets asset priorities. This approval is cleared on token transfer.Only a single account can be approved at a time, so approving the `0x0` address clears previous approvals.Requirements:  - The caller must own the token or be an approved operator.  - `tokenId` must exist.Emits an {ApprovalForAssets} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | Address of the account to grant the approval to |
| tokenId | uint256 | ID of the token for which the approval to manage the assets is granted |

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256)
```



*Returns the number of tokens in ``owner``&#39;s account.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### burn

```solidity
function burn(uint256 tokenId) external nonpayable
```

Used to burn a given token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to burn |

### burn

```solidity
function burn(uint256 tokenId, uint256 maxChildrenBurns) external nonpayable returns (uint256)
```

Used to burn a token.

*When a token is burned, its children are recursively burned as well.The approvals are cleared when the token is burned.Requirements:  - `tokenId` must exist.Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to burn |
| maxChildrenBurns | uint256 | Maximum children to recursively burn |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | uint256 The number of recursive burns it took to burn all of the children |

### childIsInActive

```solidity
function childIsInActive(address childAddress, uint256 childId) external view returns (bool)
```

Used to verify that the given child tokwn is included in an active array of a token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| childAddress | address | Address of the given token&#39;s collection smart contract |
| childId | uint256 | ID of the child token being checked |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | bool A boolean value signifying whether the given child token is included in an active child tokens array  of a token (`true`) or not (`false`) |

### childOf

```solidity
function childOf(uint256 parentId, uint256 index) external view returns (struct IRMRKNestable.Child)
```

Used to retrieve a specific active child token for a given parent token.

*Returns a single Child struct locating at `index` of parent token&#39;s active child tokens array.The Child struct consists of the following values:  [      tokenId,      contractAddress  ]*

#### Parameters

| Name | Type | Description |
|---|---|---|
| parentId | uint256 | ID of the parent token for which the child is being retrieved |
| index | uint256 | Index of the child token in the parent token&#39;s active child tokens array |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | IRMRKNestable.Child | struct A Child struct containing data about the specified child |

### childrenOf

```solidity
function childrenOf(uint256 parentId) external view returns (struct IRMRKNestable.Child[])
```

Used to retrieve the active child tokens of a given parent token.

*Returns array of Child structs existing for parent token.The Child struct consists of the following values:  [      tokenId,      contractAddress  ]*

#### Parameters

| Name | Type | Description |
|---|---|---|
| parentId | uint256 | ID of the parent token for which to retrieve the active child tokens |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | IRMRKNestable.Child[] | struct[] An array of Child structs containing the parent token&#39;s active child tokens |

### directOwnerOf

```solidity
function directOwnerOf(uint256 tokenId) external view returns (address, uint256, bool)
```

Used to retrieve the immediate owner of the given token.

*In the event the NFT is owned by an externally owned account, `tokenId` will be `0` and `isNft` will be  `false`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token for which the immediate owner is being retrieved |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | address Address of the immediate owner. If the token is owned by an externally owned account, its address  will be returned. If the token is owned by another token, the parent token&#39;s collection smart contract address  is returned |
| _1 | uint256 | uint256 Token ID of the immediate owner. If the immediate owner is an externally owned account, the value  should be `0` |
| _2 | bool | bool A boolean value signifying whether the immediate owner is a token (`true`) or not (`false`) |

### getActiveAssetPriorities

```solidity
function getActiveAssetPriorities(uint256 tokenId) external view returns (uint16[])
```

Used to retrieve active asset priorities of a given token.

*Asset priorities are a non-sequential array of uint16 values with an array size equal to active asset  priorites.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint16[] | uint16[] Array of active asset priorities |

### getActiveAssets

```solidity
function getActiveAssets(uint256 tokenId) external view returns (uint64[])
```

Used to retrieve the active asset IDs of a given token.

*Assets metadata is stored by reference mapping `_asset[assetId]`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64[] | uint64[] Array of active asset IDs |

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address)
```



*Returns the account approved for `tokenId` token. Requirements: - `tokenId` must exist.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### getApprovedForAssets

```solidity
function getApprovedForAssets(uint256 tokenId) external view returns (address)
```

Used to retrieve the address of the account approved to manage assets of a given token.

*Requirements:  - `tokenId` must exist.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token for which to retrieve the approved address |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | address Address of the account that is approved to manage the specified token&#39;s assets |

### getAssetMetadata

```solidity
function getAssetMetadata(uint256 tokenId, uint64 assetId) external view returns (string)
```

Used to fetch the asset metadata of the specified token&#39;s for given asset.

*Assets are stored by reference mapping `_assets[assetId]`.Can be overriden to implement enumerate, fallback or other custom logic.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to query |
| assetId | uint64 | Asset Id, must be in the pending or active assets array |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | string Metadata of the asset |

### getAssetReplacements

```solidity
function getAssetReplacements(uint256 tokenId, uint64 newAssetId) external view returns (uint64)
```

Used to retrieve the asset ID that will be replaced (if any) if a given assetID is accepted from  the pending assets array.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to query |
| newAssetId | uint64 | ID of the pending asset which will be accepted |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64 | uint64 ID of the asset which will be replaced |

### getPendingAssets

```solidity
function getPendingAssets(uint256 tokenId) external view returns (uint64[])
```

Returns pending asset IDs for a given token

*Pending assets metadata is stored by reference mapping _pendingAsset[assetId]*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | the token ID to query |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint64[] | uint64[] pending asset IDs |

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```



*Returns if the `operator` is allowed to manage all of the assets of `owner`. See {setApprovalForAll}*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| operator | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isApprovedForAllForAssets

```solidity
function isApprovedForAllForAssets(address owner, address operator) external view returns (bool)
```

Used to check whether the address has been granted the operator role by a given address or not.

*See {setApprovalForAllForAssets}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | Address of the account that we are checking for whether it has granted the operator role |
| operator | address | Address of the account that we are checking whether it has the operator role or not |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | bool The boolean value indicating wehter the account we are checking has been granted the operator role |

### name

```solidity
function name() external view returns (string)
```

Used to retrieve the collection name.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | string Name of the collection |

### nestTransferFrom

```solidity
function nestTransferFrom(address from, address to, uint256 tokenId, uint256 destinationId, bytes data) external nonpayable
```

Used to transfer the token into another token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | Address of the collection smart contract of the token to be transferred |
| to | address | Address of the receiving token&#39;s collection smart contract |
| tokenId | uint256 | ID of the token being transferred |
| destinationId | uint256 | ID of the token to receive the token being transferred |
| data | bytes | Additional data with no specified format, sent in the addChild call |

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address)
```

Used to retrieve the root owner of the given token.

*Root owner is always the externally owned account.If the given token is owned by another token, it will recursively query the parent tokens until reaching the  root owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token for which the root owner is being retrieved |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | address Address of the root owner of the given token |

### pendingChildOf

```solidity
function pendingChildOf(uint256 parentId, uint256 index) external view returns (struct IRMRKNestable.Child)
```

Used to retrieve a specific pending child token from a given parent token.

*Returns a single Child struct locating at `index` of parent token&#39;s active child tokens array.The Child struct consists of the following values:  [      tokenId,      contractAddress  ]*

#### Parameters

| Name | Type | Description |
|---|---|---|
| parentId | uint256 | ID of the parent token for which the pending child token is being retrieved |
| index | uint256 | Index of the child token in the parent token&#39;s pending child tokens array |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | IRMRKNestable.Child | struct A Child struct containting data about the specified child |

### pendingChildrenOf

```solidity
function pendingChildrenOf(uint256 parentId) external view returns (struct IRMRKNestable.Child[])
```

Used to retrieve the pending child tokens of a given parent token.

*Returns array of pending Child structs existing for given parent.The Child struct consists of the following values:  [      tokenId,      contractAddress  ]*

#### Parameters

| Name | Type | Description |
|---|---|---|
| parentId | uint256 | ID of the parent token for which to retrieve the pending child tokens |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | IRMRKNestable.Child[] | struct[] An array of Child structs containing the parent token&#39;s pending child tokens |

### rejectAllAssets

```solidity
function rejectAllAssets(uint256 tokenId, uint256 maxRejections) external nonpayable
```

Rejects all assets from the pending array of a given token.

*Effecitvely deletes the pending array.Requirements:  - The caller must own the token or be approved to manage the token&#39;s assets  - `tokenId` must exist.  - If there are more resouces than `maxRejections`, the execution will be revertedEmits a {AssetRejected} event with assetId = 0.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token of which to clear the pending array. |
| maxRejections | uint256 | Maximum number of expected assets to reject, used to prevent from  rejecting assets which arrive just before this operation. |

### rejectAllChildren

```solidity
function rejectAllChildren(uint256 tokenId, uint256 maxRejections) external nonpayable
```

Used to reject all pending children of a given parent token.

*Removes the children from the pending array mapping.This does not update the ownership storage data on children. If necessary, ownership can be reclaimed by the  rootOwner of the previous parent.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the parent token for which to reject all of the pending tokens. |
| maxRejections | uint256 | Maximum number of expected children to reject, used to prevent from  rejecting children which arrive just before this operation. |

### rejectAsset

```solidity
function rejectAsset(uint256 tokenId, uint256 index, uint64 assetId) external nonpayable
```

Rejects an asset from the pending array of given token.

*Removes the asset from the token&#39;s pending asset array.Requirements:  - The caller must own the token or be approved to manage the token&#39;s assets  - `tokenId` must exist.  - `index` must be in range of the length of the pending asset array.Emits a {AssetRejected} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token that the asset is being rejected from |
| index | uint256 | Index of the asset in the pending array to be rejected |
| assetId | uint64 | ID of the asset expected to be located at the specified index |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*Safely transfers `tokenId` token from `from` to `to`, checking first that contract recipients are aware of the ERC721 protocol to prevent tokens from being forever locked. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must have been allowed to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) external nonpayable
```



*Safely transfers `tokenId` token from `from` to `to`. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must exist and be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. - If `to` refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer. Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |
| data | bytes | undefined |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```



*Approve or remove `operator` as an operator for the caller. Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller. Requirements: - The `operator` cannot be the caller. Emits an {ApprovalForAll} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |
| approved | bool | undefined |

### setApprovalForAllForAssets

```solidity
function setApprovalForAllForAssets(address operator, bool approved) external nonpayable
```

Used to add or remove an operator of assets for the caller.

*Operators can call {acceptAsset}, {rejectAsset}, {rejectAllAssets} or {setPriority} for any token  owned by the caller.Requirements:  - The `operator` cannot be the caller.Emits an {ApprovalForAllForAssets} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | Address of the account to which the operator role is granted or revoked from |
| approved | bool | The boolean value indicating whether the operator role is being granted (`true`) or revoked  (`false`) |

### setPriority

```solidity
function setPriority(uint256 tokenId, uint16[] priorities) external nonpayable
```

Sets a new priority array for a given token.

*The priority array is a non-sequential list of `uint16`s, where the lowest value is considered highest  priority.Value `0` of a priority is a special case equivalent to unitialized.Requirements:  - The caller must own the token or be approved to manage the token&#39;s assets  - `tokenId` must exist.  - The length of `priorities` must be equal the length of the active assets array.Emits a {AssetPrioritySet} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to set the priorities for |
| priorities | uint16[] | An array of priorities of active assets. The succesion of items in the priorities array  matches that of the succesion of items in the active array |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```

Used to retrieve the collection symbol.




#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | string Symbol of the collection |

### tokenURI

```solidity
function tokenURI(uint256 tokenId) external view returns (string)
```

Used to retrieve the metadata URI of a token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the token to retrieve the metadata URI for |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | string Metadata URI of the specified token |

### transferChild

```solidity
function transferChild(uint256 tokenId, address to, uint256 destinationId, uint256 childIndex, address childAddress, uint256 childId, bool isPending, bytes data) external nonpayable
```

Used to transfer a child token from a given parent token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | ID of the parent token from which the child token is being transferred |
| to | address | Address to which to transfer the token to |
| destinationId | uint256 | ID of the token to receive this child token (MUST be 0 if the destination is not a token) |
| childIndex | uint256 | Index of a token we are transferring, in the array it belongs to (can be either active array or  pending array) |
| childAddress | address | Address of the child token&#39;s collection smart contract. |
| childId | uint256 | ID of the child token in its own collection smart contract. |
| isPending | bool | A boolean value indicating whether the child token being transferred is in the pending array of the  parent token (`true`) or in the active array (`false`) |
| data | bytes | Additional data with no specified format, sent in call to `_to` |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external nonpayable
```



*Transfers `tokenId` token from `from` to `to`. WARNING: Note that the caller is responsible to confirm that the recipient is capable of receiving ERC721 or else they may be permanently lost. Usage of {safeTransferFrom} prevents loss, though the caller must understand this adds an external call which potentially creates a reentrancy vulnerability. Requirements: - `from` cannot be the zero address. - `to` cannot be the zero address. - `tokenId` token must be owned by `from`. - If the caller is not `from`, it must be approved to move this token by either {approve} or {setApprovalForAll}. Emits a {Transfer} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| tokenId | uint256 | undefined |



## Events

### AllChildrenRejected

```solidity
event AllChildrenRejected(uint256 indexed tokenId)
```

Used to notify listeners that all pending child tokens of a given token have been rejected.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | undefined |

### Approval

```solidity
event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### ApprovalForAllForAssets

```solidity
event ApprovalForAllForAssets(address indexed owner, address indexed operator, bool approved)
```

Used to notify listeners that owner has granted approval to the user to manage assets of all of their  tokens.



#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### ApprovalForAssets

```solidity
event ApprovalForAssets(address indexed owner, address indexed approved, uint256 indexed tokenId)
```

Used to notify listeners that owner has granted an approval to the user to manage the assets of a  given token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| approved `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |

### AssetAccepted

```solidity
event AssetAccepted(uint256 indexed tokenId, uint64 indexed assetId, uint64 indexed replacesId)
```

Used to notify listeners that an asset object at `assetId` is accepted by the token and migrated  from token&#39;s pending assets array to active assets array of the token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | undefined |
| assetId `indexed` | uint64 | undefined |
| replacesId `indexed` | uint64 | undefined |

### AssetAddedToToken

```solidity
event AssetAddedToToken(uint256 indexed tokenId, uint64 indexed assetId, uint64 indexed replacesId)
```

Used to notify listeners that an asset object at `assetId` is added to token&#39;s pending asset  array.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | undefined |
| assetId `indexed` | uint64 | undefined |
| replacesId `indexed` | uint64 | undefined |

### AssetPrioritySet

```solidity
event AssetPrioritySet(uint256 indexed tokenId)
```

Used to notify listeners that token&#39;s prioritiy array is reordered.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | undefined |

### AssetRejected

```solidity
event AssetRejected(uint256 indexed tokenId, uint64 indexed assetId)
```

Used to notify listeners that an asset object at `assetId` is rejected from token and is dropped  from the pending assets array of the token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | undefined |
| assetId `indexed` | uint64 | undefined |

### AssetSet

```solidity
event AssetSet(uint64 indexed assetId)
```

Used to notify listeners that an asset object is initialized at `assetId`.



#### Parameters

| Name | Type | Description |
|---|---|---|
| assetId `indexed` | uint64 | undefined |

### ChildAccepted

```solidity
event ChildAccepted(uint256 indexed tokenId, uint256 childIndex, address indexed childAddress, uint256 indexed childId)
```

Used to notify listeners that a new child token was accepted by the parent token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | undefined |
| childIndex  | uint256 | undefined |
| childAddress `indexed` | address | undefined |
| childId `indexed` | uint256 | undefined |

### ChildProposed

```solidity
event ChildProposed(uint256 indexed tokenId, uint256 childIndex, address indexed childAddress, uint256 indexed childId)
```

Used to notify listeners that a new token has been added to a given token&#39;s pending children array.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | undefined |
| childIndex  | uint256 | undefined |
| childAddress `indexed` | address | undefined |
| childId `indexed` | uint256 | undefined |

### ChildTransferred

```solidity
event ChildTransferred(uint256 indexed tokenId, uint256 childIndex, address indexed childAddress, uint256 indexed childId, bool fromPending)
```

Used to notify listeners a child token has been transferred from parent token.



#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId `indexed` | uint256 | undefined |
| childIndex  | uint256 | undefined |
| childAddress `indexed` | address | undefined |
| childId `indexed` | uint256 | undefined |
| fromPending  | bool | undefined |

### NestTransfer

```solidity
event NestTransfer(address indexed from, address indexed to, uint256 fromTokenId, uint256 toTokenId, uint256 indexed tokenId)
```

Used to notify listeners that the token is being transferred.



#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| fromTokenId  | uint256 | undefined |
| toTokenId  | uint256 | undefined |
| tokenId `indexed` | uint256 | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| tokenId `indexed` | uint256 | undefined |



## Errors

### ERC721AddressZeroIsNotaValidOwner

```solidity
error ERC721AddressZeroIsNotaValidOwner()
```

Attempting to grant the token to 0x0 address




### ERC721ApprovalToCurrentOwner

```solidity
error ERC721ApprovalToCurrentOwner()
```

Attempting to grant approval to the current owner of the token




### ERC721ApproveCallerIsNotOwnerNorApprovedForAll

```solidity
error ERC721ApproveCallerIsNotOwnerNorApprovedForAll()
```

Attempting to grant approval when not being owner or approved for all should not be permitted




### ERC721ApproveToCaller

```solidity
error ERC721ApproveToCaller()
```

Attempting to grant approval to self




### ERC721InvalidTokenId

```solidity
error ERC721InvalidTokenId()
```

Attempting to use an invalid token ID




### ERC721NotApprovedOrOwner

```solidity
error ERC721NotApprovedOrOwner()
```

Attempting to manage a token without being its owner or approved by the owner




### ERC721TransferFromIncorrectOwner

```solidity
error ERC721TransferFromIncorrectOwner()
```

Attempting to transfer the token from an address that is not the owner




### ERC721TransferToNonReceiverImplementer

```solidity
error ERC721TransferToNonReceiverImplementer()
```

Attempting to safe transfer to an address that is unable to receive the token




### ERC721TransferToTheZeroAddress

```solidity
error ERC721TransferToTheZeroAddress()
```

Attempting to transfer the token to a 0x0 address




### RMRKApprovalForAssetsToCurrentOwner

```solidity
error RMRKApprovalForAssetsToCurrentOwner()
```

Attempting to grant approval of assets to their current owner




### RMRKApproveForAssetsCallerIsNotOwnerNorApprovedForAll

```solidity
error RMRKApproveForAssetsCallerIsNotOwnerNorApprovedForAll()
```

Attempting to grant approval of assets without being the caller or approved for all




### RMRKBadPriorityListLength

```solidity
error RMRKBadPriorityListLength()
```

Attempting to set the priorities with an array of length that doesn&#39;t match the length of active assets array




### RMRKChildAlreadyExists

```solidity
error RMRKChildAlreadyExists()
```

Attempting to accept a child that has already been accepted




### RMRKChildIndexOutOfRange

```solidity
error RMRKChildIndexOutOfRange()
```

Attempting to interact with a child, using index that is higher than the number of children




### RMRKIndexOutOfRange

```solidity
error RMRKIndexOutOfRange()
```

Attempting to interact with an asset, using index greater than number of assets




### RMRKIsNotContract

```solidity
error RMRKIsNotContract()
```

Attempting to interact with an end-user account when the contract account is expected




### RMRKMaxPendingChildrenReached

```solidity
error RMRKMaxPendingChildrenReached()
```

Attempting to add a pending child after the number of pending children has reached the limit (default limit is 128)




### RMRKMaxRecursiveBurnsReached

```solidity
error RMRKMaxRecursiveBurnsReached(address childContract, uint256 childId)
```

Attempting to burn a total number of recursive children higher than maximum set



#### Parameters

| Name | Type | Description |
|---|---|---|
| childContract | address | Address of the collection smart contract in which the maximum number of recursive burns was reached |
| childId | uint256 | ID of the child token at which the maximum number of recursive burns was reached |

### RMRKNestableTooDeep

```solidity
error RMRKNestableTooDeep()
```

Attempting to nest a child over the nestable limit (current limit is 100 levels of nesting)




### RMRKNestableTransferToDescendant

```solidity
error RMRKNestableTransferToDescendant()
```

Attempting to nest the token to own descendant, which would create a loop and leave the looped tokens in limbo




### RMRKNestableTransferToNonRMRKNestableImplementer

```solidity
error RMRKNestableTransferToNonRMRKNestableImplementer()
```

Attempting to nest the token to a smart contract that doesn&#39;t support nesting




### RMRKNestableTransferToSelf

```solidity
error RMRKNestableTransferToSelf()
```

Attempting to nest the token into itself




### RMRKNotApprovedForAssetsOrOwner

```solidity
error RMRKNotApprovedForAssetsOrOwner()
```

Attempting to manage an asset without owning it or having been granted permission by the owner to do so




### RMRKNotApprovedOrDirectOwner

```solidity
error RMRKNotApprovedOrDirectOwner()
```

Attempting to interact with a token without being its owner or having been granted permission by the  owner to do so

*When a token is nested, only the direct owner (NFT parent) can mange it. In that case, approved addresses are  not allowed to manage it, in order to ensure the expected behaviour*


### RMRKPendingChildIndexOutOfRange

```solidity
error RMRKPendingChildIndexOutOfRange()
```

Attempting to interact with a pending child using an index greater than the size of pending array




### RMRKTokenDoesNotHaveAsset

```solidity
error RMRKTokenDoesNotHaveAsset()
```

Attempting to compose a NFT of a token without active assets




### RMRKUnexpectedAssetId

```solidity
error RMRKUnexpectedAssetId()
```

Attempting to accept or reject an asset which does not match the one at the specified index




### RMRKUnexpectedChildId

```solidity
error RMRKUnexpectedChildId()
```

Attempting to accept or transfer a child which does not match the one at the specified index




### RMRKUnexpectedNumberOfAssets

```solidity
error RMRKUnexpectedNumberOfAssets()
```

Attempting to reject all pending assets but more assets than expected are pending




### RMRKUnexpectedNumberOfChildren

```solidity
error RMRKUnexpectedNumberOfChildren()
```

Attempting to reject all pending children but children assets than expected are pending





