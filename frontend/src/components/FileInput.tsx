import { PropFunction } from "@builder.io/qwik";

type FileInputProps = {
  onChange$: PropFunction<(file: File | null) => void>;
}

const FileInput = (props: FileInputProps) => (
  <input
    type="file"
    class="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:cursor-pointer"
    onChange$={(event) => event.target.files && props.onChange$(event.target.files[0])}
  />
);

export default FileInput;

