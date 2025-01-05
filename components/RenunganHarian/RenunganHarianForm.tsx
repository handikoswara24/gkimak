'use client'

import React, { useCallback, useMemo, useRef, useState } from 'react'
import QuillEditor from "react-quill";
import "react-quill/dist/quill.snow.css";


const RenunganHarianForm = () => {
    const [value, setValue] = useState("");

    // Editor ref
    const quill = useRef();

  
    const modules = useMemo(
      () => ({
        toolbar: {
          container: [
            [{ header: [1, 2, 3, 4, false] }],
            ["bold", "italic", "underline", "blockquote"],
            [{ color: [] }],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link"],
            ["clean"],
          ],
        },
        clipboard: {
          matchVisual: true,
        },
      })
    , []);
  
    const formats = [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "color",
      "clean",
    ];

    return (
        <div>
            <div onClick={() => console.log(value)}>RenunganHarian</div>
            <label >Editor Content</label>
            <QuillEditor
                //@ts-ignore
                ref={(el) => (quill.current = el)}
                theme="snow"
                value={value}
                formats={formats}
                modules={modules}
                onChange={(value) => setValue(value)}
            />
            <div dangerouslySetInnerHTML={{__html: value}}>

            </div>
        </div>
    )
}

export default RenunganHarianForm