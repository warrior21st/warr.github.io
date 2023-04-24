var testTupleAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "x",
                "type": "address"
            }
        ],
        "name": "LogAddress",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "x",
                "type": "uint256"
            }
        ],
        "name": "LogUint",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "x",
                "type": "bytes32"
            }
        ],
        "name": "encode",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "a",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "b",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct test.Test1",
                "name": "t",
                "type": "tuple"
            }
        ],
        "name": "testTest1",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "a",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "b",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct test.Test2",
                "name": "t",
                "type": "tuple"
            }
        ],
        "name": "testTest2",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]