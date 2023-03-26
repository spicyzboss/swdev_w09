type ImageCardProps = {
  title: string;
  src: string;
  color?: string;
}

const ImageCard = (props: ImageCardProps) => (
  <div class="flex flex-col items-center p-4 max-w-xs w-full gap-4">
    <p class="font-bold text-2xl">{props.title}</p>
    <div class={`ring ${props?.color || 'ring-blue-50'} w-full aspect-square rounded-2xl overflow-hidden`}>
      <div class="flex justify-center items-center h-full w-full">
        <image src={props.src} />
      </div>
    </div>
  </div>
);

export default ImageCard;

