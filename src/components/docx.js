import React from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";

function Docx({ title }) {
  const createDocument = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun(title),
                new TextRun("Hello, World!"),
                new TextRun({
                  text: " This is a second sentence.",
                  bold: true,
                }),
              ],
            }),
          ],
        },
      ],
    });

    // Use Packer to generate a blob from the document
    Packer.toBlob(doc).then((blob) => {
      // Save the document using FileSaver
      saveAs(blob, title + ".docx");
    });
  };

  return (
    <Button onClick={createDocument} variant="contained">
      Create {title} Document
    </Button>
  );
}

export default Docx;
