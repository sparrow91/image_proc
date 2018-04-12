function applyFilter (data) {
  for (let i=0; i < data.length; i+=4)
    {
      data[i + 3] = 100;
    }
}

function useFileReader (event) {
  const file = event.srcElement.files[0];
  fileReader.readAsDataURL(file);
}

async function useImageBitMap (event) {
  const bitmap = await createImageBitmap(event.srcElement.files[0]);
  const ctx = $canvas.getContext("2d");
  $canvas.width = bitmap.width;
  $canvas.height = bitmap.height;
  $canvas.id = "myCanvas"
  ctx.drawImage(bitmap, 0, 0);
  var imageData = ctx.getImageData(0, 0, $canvas.width, $canvas.height);
  applyFilter(imageData.data);
  ctx.putImageData(imageData, 0, 0)
  document.body.appendChild($canvas);
}
