import Footer from "@/components/footer";
import UploadForm from "@/components/uploadForm";
import UploadNav from "@/components/uploadNav";
import UploadText from "@/components/uploadText";

export default function Upload() {
  return (
    <>
      <UploadNav />
      <UploadText />
      <UploadForm />
      <Footer />
    </>
  );
}
