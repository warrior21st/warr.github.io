






function toBytes32Hex(hex){
    var result = hex.toLowerCase();
    if(result.startsWith('0x')){
        result=result.substring(2);
    }
    if(result.length>=64){
        return "0x"+result;
    }

    return  "0x"+result.padStart(64,'0');
}

function bytes32ToAddress(bytes32Hex){
    return "0x" + bytes32Hex.substring(-1,40);
}