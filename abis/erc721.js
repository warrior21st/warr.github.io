
var erc721Abi = [{
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "Approval",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }
    ],
    "name": "ApprovalForAll",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "internalType": "address",
            "name": "minter",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "bytes32[]",
            "name": "packedProps",
            "type": "bytes32[]"
        }
    ],
    "name": "Minted",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "internalType": "address",
            "name": "updater",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "mapIndex",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "bytes32",
            "name": "oldPackedProps",
            "type": "bytes32"
        },
        {
            "indexed": false,
            "internalType": "bytes32",
            "name": "newPackedProps",
            "type": "bytes32"
        }
    ],
    "name": "PropertiesUpdated",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "Transfer",
    "type": "event"
},
{
    "inputs": [],
    "name": "DESCRIPTION",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "DOMAIN_SEPARATOR",
    "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "DOMAIN_TYPEHASH",
    "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "PERMIT_TYPEHASH",
    "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "minter",
            "type": "address"
        }
    ],
    "name": "addMinter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_propertyIndex",
            "type": "uint256"
        },
        {
            "internalType": "string",
            "name": "_aliasName",
            "type": "string"
        }
    ],
    "name": "addPropertyCap",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "updater",
            "type": "address"
        }
    ],
    "name": "addUpdater",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_pIndex",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "_pVal",
            "type": "uint256"
        }
    ],
    "name": "aliasOf",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_propertyIndex",
            "type": "uint256"
        }
    ],
    "name": "allAliasOf",
    "outputs": [
        {
            "internalType": "string[]",
            "name": "",
            "type": "string[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "allPackedPropsLength",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "allPropsLength",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }
    ],
    "name": "balanceOf",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "exists",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "getApproved",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "imageOf",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }
    ],
    "name": "isApprovedForAll",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "minter",
            "type": "address"
        }
    ],
    "name": "isMinter",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "updater",
            "type": "address"
        }
    ],
    "name": "isUpdater",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "itemProperties",
    "outputs": [
        {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "managerBurn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "name",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "nextTokenId",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "nonce",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "owner",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "ownerOf",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256[]",
            "name": "unpackedProps",
            "type": "uint256[]"
        }
    ],
    "name": "packProperties",
    "outputs": [
        {
            "internalType": "bytes32[]",
            "name": "",
            "type": "bytes32[]"
        }
    ],
    "stateMutability": "pure",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "mapIndex",
            "type": "uint256"
        }
    ],
    "name": "packedPropertiesOf",
    "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        },
        {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
        },
        {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
        },
        {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
        }
    ],
    "name": "permit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_pIndex",
            "type": "uint256"
        }
    ],
    "name": "propertyNameOf",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "mapIndex",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "pos",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "length",
            "type": "uint256"
        }
    ],
    "name": "readProperty",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "minter",
            "type": "address"
        }
    ],
    "name": "removeMinter",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "updater",
            "type": "address"
        }
    ],
    "name": "removeUpdater",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256[]",
            "name": "props",
            "type": "uint256[]"
        }
    ],
    "name": "safeMint",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256[]",
            "name": "props",
            "type": "uint256[]"
        },
        {
            "internalType": "string",
            "name": "imageUrl",
            "type": "string"
        }
    ],
    "name": "safeMintWithImage",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "internalType": "bytes",
            "name": "_data",
            "type": "bytes"
        }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_propertyIndex",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "_propertyVal",
            "type": "uint256"
        },
        {
            "internalType": "string",
            "name": "_aliasName",
            "type": "string"
        }
    ],
    "name": "setAlias",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "operator",
            "type": "address"
        },
        {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
        }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "descriptor",
            "type": "address"
        }
    ],
    "name": "setDescriptor",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "string",
            "name": "uri",
            "type": "string"
        }
    ],
    "name": "setImageBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "_pIndex",
            "type": "uint256"
        },
        {
            "internalType": "string",
            "name": "_pName",
            "type": "string"
        }
    ],
    "name": "setPropertyName",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "internalType": "string",
            "name": "imageUrl",
            "type": "string"
        }
    ],
    "name": "setSpecialImage",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "_v1Minter",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "badge",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "mintCap",
            "type": "uint256"
        }
    ],
    "name": "setV1MinterCap",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "specialImageOf",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
        }
    ],
    "name": "supportsInterface",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "symbol",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }
    ],
    "name": "tokenByIndex",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "tokenDescriptor",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
        }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "tokenURI",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "bytes32[]",
            "name": "packedProps",
            "type": "bytes32[]"
        }
    ],
    "name": "unpackProperties",
    "outputs": [
        {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }
    ],
    "stateMutability": "pure",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "mapIndex",
            "type": "uint256"
        },
        {
            "internalType": "bytes32",
            "name": "newPackedProps",
            "type": "bytes32"
        }
    ],
    "name": "updatePackedProperties",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "mapIndex",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "pos",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "length",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "newVal",
            "type": "uint256"
        }
    ],
    "name": "updateProperty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "account",
            "type": "address"
        }
    ],
    "name": "userAllTokens",
    "outputs": [
        {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "v1MinterInfoOf",
    "outputs": [
        {
            "internalType": "uint128",
            "name": "mintCap",
            "type": "uint128"
        },
        {
            "internalType": "uint128",
            "name": "totalMinted",
            "type": "uint128"
        }
    ],
    "stateMutability": "view",
    "type": "function"
}];