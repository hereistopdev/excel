import React from "react";
import { AlignmentType, Document, Packer, Paragraph, TextRun } from "docx";
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
              text: "100 E. Michigan Blvd. / Suite 2",
              alignment: AlignmentType.RIGHT,
            }),
            new Paragraph({
              text: "Michigan City, IN 46360-3293",
              alignment: AlignmentType.RIGHT,
            }),
            new Paragraph({
              text: "Phone (219) 873-1506",
              alignment: AlignmentType.RIGHT,
            }),
            new Paragraph({
              text: "Fax (219) 873-1506",
              alignment: AlignmentType.RIGHT,
            }),
            new Paragraph({
              text: "www.michigancityparks.com",
              alignment: AlignmentType.RIGHT,
            }),
            new Paragraph(""),
            new Paragraph({
              text: "The Michigan City Park and Recreation Board met in regular session on Wednesday, February 7th, 2024, at the hour of 5:00 P.M. in the Council Chambers at City Hall, City of Michigan City, Indiana.",
              alignment: AlignmentType.LEFT,
            }),
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
