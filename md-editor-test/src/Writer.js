import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

export default function Writer() {
  return (
    <div>
      <textarea type="title" placeholder="제목을 입력하세요."></textarea>
      <Editor
        previewStyle={"vertical"}
        height="79vh"
        initialEditType="markdown"
        initialValue="마크다운으로 내용을 입력하세요."
      />
    </div>
  );
}
