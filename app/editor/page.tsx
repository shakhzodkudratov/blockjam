'use client';

import '@blocknote/core/style.css';
import { BlockNoteView, useBlockNote } from '@blocknote/react';

type WindowWithProseMirror = Window & typeof globalThis & { ProseMirror: any };

export default function EditorPage() {
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      console.log(editor.topLevelBlocks);
    },
    editorDOMAttributes: {
      'data-test': 'editor',
    },
    initialContent: new Array(100).fill({
      type: 'paragraph',
      content: 'Hello, world!',
    }),
    theme: 'light',
  });

  // Give tests a way to get prosemirror instance
  (window as WindowWithProseMirror).ProseMirror = editor?._tiptapEditor;

  return (
    <div>
      <BlockNoteView editor={editor} />
    </div>
  );
}
