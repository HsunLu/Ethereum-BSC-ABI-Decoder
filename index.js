function decode() {
  const abi = JSON.parse(document.getElementById("abi").value);
  alert(abi);
  const data = document.getElementById("data").value;
  alert(data);
  const decoder = document.getElementById("decoder").value;
  alert(decoder);
  let decodedData;
  if (decoder === "ethers") {
    decodedData = ethers.utils.defaultAbiCoder.decode(abi, data);
  } else if (decoder === "abi-decoder") {
    AbiDecoder.decodeMethod(data, abi);
    decodedData = AbiDecoder.getMethodReturn();
  }
  alert(decodedData);
  document.getElementById("decoded").textContent = JSON.stringify(decodedData, null, 2);
}

$(document).ready(function () {
  $("#decode").click(function () {
    decode();
  });
});
