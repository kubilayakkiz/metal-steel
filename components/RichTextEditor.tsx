'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { TextStyle } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import { useEffect } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      }),
      TextStyle,
      Color,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({
        multicolor: true,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-lg max-w-none focus:outline-none min-h-[400px] p-4',
      },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value);
    }
  }, [value, editor]);

  if (!editor) {
    return (
      <div className="border border-gray-300 rounded-lg min-h-[400px] p-4 bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="border-b border-gray-300 bg-gray-50 p-2 flex flex-wrap gap-2">
        {/* Headings */}
        <select
          onChange={(e) => {
            const level = parseInt(e.target.value);
            if (level === 0) {
              editor.chain().focus().setParagraph().run();
            } else {
              editor.chain().focus().toggleHeading({ level: level as 1 | 2 | 3 | 4 | 5 | 6 }).run();
            }
          }}
          className="px-2 py-1 border border-gray-300 rounded text-sm bg-white"
          value={
            editor.isActive('heading', { level: 1 }) ? '1' :
            editor.isActive('heading', { level: 2 }) ? '2' :
            editor.isActive('heading', { level: 3 }) ? '3' :
            editor.isActive('heading', { level: 4 }) ? '4' :
            editor.isActive('heading', { level: 5 }) ? '5' :
            editor.isActive('heading', { level: 6 }) ? '6' : '0'
          }
        >
          <option value="0">Normal</option>
          <option value="1">Başlık 1</option>
          <option value="2">Başlık 2</option>
          <option value="3">Başlık 3</option>
          <option value="4">Başlık 4</option>
          <option value="5">Başlık 5</option>
          <option value="6">Başlık 6</option>
        </select>

        <div className="border-l border-gray-300 mx-1"></div>

        {/* Bold, Italic, Underline */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded text-sm font-bold transition-colors ${
            editor.isActive('bold') ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="Kalın"
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded text-sm italic transition-colors ${
            editor.isActive('italic') ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="İtalik"
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-3 py-1 rounded text-sm underline transition-colors ${
            editor.isActive('underline') ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="Altı Çizili"
        >
          U
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-3 py-1 rounded text-sm line-through transition-colors ${
            editor.isActive('strike') ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="Üstü Çizili"
        >
          S
        </button>

        <div className="border-l border-gray-300 mx-1"></div>

        {/* Lists */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            editor.isActive('bulletList') ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="Madde İşareti"
        >
          •
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            editor.isActive('orderedList') ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="Numaralı Liste"
        >
          1.
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            editor.isActive('blockquote') ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="Alıntı"
        >
          "
        </button>

        <div className="border-l border-gray-300 mx-1"></div>

        {/* Text Align */}
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            editor.isActive({ textAlign: 'left' }) ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="Sola Hizala"
        >
          ⬅
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            editor.isActive({ textAlign: 'center' }) ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="Ortala"
        >
          ⬌
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            editor.isActive({ textAlign: 'right' }) ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="Sağa Hizala"
        >
          ➡
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            editor.isActive({ textAlign: 'justify' }) ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="İki Yana Yasla"
        >
          ⬌
        </button>

        <div className="border-l border-gray-300 mx-1"></div>

        {/* Colors */}
        <div className="flex items-center gap-1">
          <input
            type="color"
            onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
            className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
            title="Metin Rengi"
            defaultValue="#000000"
          />
          <input
            type="color"
            onChange={(e) => editor.chain().focus().toggleHighlight({ color: e.target.value }).run()}
            className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
            title="Vurgu Rengi"
            defaultValue="#ffff00"
          />
        </div>

        <div className="border-l border-gray-300 mx-1"></div>

        {/* Link */}
        <button
          onClick={() => {
            if (editor.isActive('link')) {
              editor.chain().focus().unsetLink().run();
            } else {
              const url = window.prompt('Link URL\'si girin:');
              if (url) {
                editor.chain().focus().setLink({ href: url }).run();
              }
            }
          }}
          className={`px-3 py-1 rounded text-sm transition-colors ${
            editor.isActive('link') ? 'bg-[#261dcf] text-white' : 'bg-white hover:bg-gray-100 text-gray-700'
          }`}
          type="button"
          title="Link Ekle/Kaldır"
        >
          🔗
        </button>

        {/* Image */}
        <button
          onClick={() => {
            const url = window.prompt('Görsel URL\'si girin:');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          className="px-3 py-1 rounded text-sm bg-white hover:bg-gray-100 text-gray-700 transition-colors"
          type="button"
          title="Görsel Ekle"
        >
          🖼️
        </button>

        <div className="border-l border-gray-300 mx-1"></div>

        {/* Clear Formatting */}
        <button
          onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
          className="px-3 py-1 rounded text-sm bg-white hover:bg-gray-100 text-gray-700 transition-colors"
          type="button"
          title="Biçimlendirmeyi Temizle"
        >
          Temizle
        </button>
      </div>

      {/* Editor Content */}
      <div className="min-h-[400px] max-h-[600px] overflow-y-auto">
        <EditorContent editor={editor} />
      </div>

      <style jsx global>{`
        .ProseMirror {
          outline: none;
          min-height: 400px;
          padding: 1rem;
        }
        .ProseMirror p {
          margin: 0.5rem 0;
        }
        .ProseMirror h1, .ProseMirror h2, .ProseMirror h3, 
        .ProseMirror h4, .ProseMirror h5, .ProseMirror h6 {
          margin: 1rem 0 0.5rem 0;
          font-weight: bold;
        }
        .ProseMirror h1 { font-size: 2rem; }
        .ProseMirror h2 { font-size: 1.75rem; }
        .ProseMirror h3 { font-size: 1.5rem; }
        .ProseMirror h4 { font-size: 1.25rem; }
        .ProseMirror h5 { font-size: 1.1rem; }
        .ProseMirror h6 { font-size: 1rem; }
        .ProseMirror ul, .ProseMirror ol {
          padding-left: 1.5rem;
          margin: 0.5rem 0;
        }
        .ProseMirror blockquote {
          border-left: 4px solid #261dcf;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
        }
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          margin: 1rem 0;
        }
        .ProseMirror a {
          color: #261dcf;
          text-decoration: underline;
        }
        .ProseMirror mark {
          background-color: #ffff00;
          padding: 2px 0;
        }
      `}</style>
    </div>
  );
}
