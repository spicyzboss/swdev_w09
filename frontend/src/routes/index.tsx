import { component$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import FileInput from '~/components/FileInput';
import ImageCard from '~/components/ImageCard';
import { convertBase64 } from '~/helpers/converter';

export default component$(() => {
  const realFile = useSignal<string>("");
  const resultFile = useSignal<string>("");

  const setRealFile = $(async (file: File | null) => {
    realFile.value = await convertBase64(file);
  });

  const submitProcess = $(async () => {
    const request = await fetch(`http://18.181.169.203:8080/process-image`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        image: realFile.value,
        name: 'test',
        surname: 'test',
        numbers: [1, 2, 3],
      }),
    });

    const response = await request.json();

    resultFile.value = response.processed_image;
  });
  
  return (
    <div class="flex justify-center items-center h-screen flex-col gap-8">
      <p class="text-blue-400 font-bold text-6xl">Drop file here</p>
      <FileInput onChange$={setRealFile} />
      <div class="flex w-full max-w-5xl justify-center gap-8">
        <ImageCard src={realFile.value} title="Source" color="ring-green-500" />
        <ImageCard src={resultFile.value} title="Result" color="ring-amber-500" />
      </div>
      <button disabled={!realFile.value} class={`text-white p-4 rounded-2xl ${realFile.value ? 'bg-blue-400' : 'bg-blue-100 cursor-not-allowed'}`} onClick$={submitProcess}>Submit</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Process Image',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};

