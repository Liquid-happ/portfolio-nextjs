import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10">
      <Image
        src="/images/avatar.png"
        width={200}
        height={250}
        alt="Hình ảnh của Dương Bá Quyết"
        className="rounded-full shadow-lg mb-6 object-cover"
        loading="lazy" // Lazy loading
      />
      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
        Dương Bá Quyết
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-lg">
        Lập trình viên Web & IoT
      </p>
    </div>
  );
}