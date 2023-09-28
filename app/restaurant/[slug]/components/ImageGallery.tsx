interface ImageGalleryProps {
  images: string[];
}
const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {images.length} photo{images.length > 1 ? "s" : ""}
      </h1>
      <div className="flex flex-wrap">
        {images.map((image, i) => (
          <img
            key={i}
            className="w-56 h-47 mr-1 mb-1"
            src={image}
            alt="Image"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
