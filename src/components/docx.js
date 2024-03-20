import React from "react";
import { AlignmentType, Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";

function Docx({ title, presents, absent }) {
  const createDocument = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "100 E. Michigan Blvd. / Suite 2",
                  bold: true,
                  size: 25,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "Michigan City, IN 46360-3293",
                  bold: true,
                  size: 25,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "Phone (219) 873-1506",
                  bold: true,
                  size: 25,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "Fax (219) 873-1506",
                  bold: true,
                  size: 25,
                }),
              ],
            }),
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: "www.michigancityparks.com",
                  bold: true,
                  size: 25,
                }),
              ],
            }),
            new Paragraph(""),
            new Paragraph({
              children: [
                new TextRun({
                  text: "The Michigan City Park and Recreation Board met ",
                  bold: true,
                  size: 24,
                }),
                new TextRun({
                  text: "in regular session on Wednesday, February 7th, 2024, at the hour of 5:00 P.M. in the Council Chambers at City Hall, City of Michigan City, Indiana.",
                  size: 24,
                }),
              ],
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph(""),
            new Paragraph({
              text: "The Pledge of Allegiance was recited.",
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph(""),
            new Paragraph({
              text: "On the call of the roll, the following Board Members were found to be present or absent:",
              alignment: AlignmentType.LEFT,
            }),
            new Paragraph(""),
            new Paragraph({
              text: "Present : " + presents.join(","),
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              text: "Absent : " + absent.join(","),
              alignment: AlignmentType.CENTER,
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
