import { fileTypeFromBuffer } from "file-type";

export async function fileType() {
  const ui8 = new Uint8Array();

  const file = await fileTypeFromBuffer(ui8);
  console.log(file);
}
