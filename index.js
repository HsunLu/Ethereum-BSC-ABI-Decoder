function decode() {
  const abi = JSON.parse(document.getElementById("abi").value);
  const data = document.getElementById("data").value;
  const decoder = document.getElementById("decoder").value;
  let decodedData;
  if (decoder === "ethers") {
    decodedData = ethers.utils.defaultAbiCoder.decode(abi, data);
  } else if (decoder === "abi-decoder") {
    AbiDecoder.decodeMethod(data, abi);
    decodedData = AbiDecoder.getMethodReturn();
  }
  document.getElementById("decoded").textContent = JSON.stringify(decodedData, null, 2);
}

$(document).ready(function () {
  $("#decode").click(function () {
    decode();
  });
});
