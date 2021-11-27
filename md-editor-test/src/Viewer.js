import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
const test = `# markdown`;
export default function PostView() {
  return <Viewer initialValue={test} />;
}
