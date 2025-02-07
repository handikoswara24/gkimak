import dynamic from 'next/dynamic';
import React, { useMemo, useRef } from 'react'
import "react-quill/dist/quill.snow.css";

type HtmlEditorProps = {
    content: string,
    setContent: (newContent: string) => void
}
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });
const HtmlEditor = ({content, setContent} : HtmlEditorProps) => {
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
        <QuillEditor
            //@ts-ignore
            ref={(el) => (quill.current = el)}
            theme="snow"
            className='h-32 rounded-xl'
            value={content}
            formats={formats}
            modules={modules}
            onChange={(content) => setContent(content)}
        />
    )
}

export default HtmlEditor