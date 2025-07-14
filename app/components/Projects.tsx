import Image from 'next/image';

const projects = [
  {
    name: 'Giám sát không khí',
    tech: 'ESP32, BME680',
    image: '/images/project2.png',
    width: 600,
    height: 300,
    link: 'https://github.com/Liquid-happ/machinelearning'
  },
  {
    name: 'Cờ vua',
    tech: 'Next.js, MongoDB',
    image: '/images/project1.png',
    width: 300,
    height: 400,
    link: 'https://github.com/Liquid-happ/nhapmonai'
  },
];

export default function Projects() {
  return (
    <section className="p-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-center">Dự án tiêu biểu</h2>
      <div className="grid gap-6 md:grid-cols-2 text-center max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 p-4 rounded shadow hover:shadow-lg transition duration-200"
          >
            
            <h3 className="font-semibold text-lg">{proj.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Công nghệ: {proj.tech}</p>
            <p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {proj.link}
            </a>
            </p>
            <Image
              src={proj.image}
              width={proj.width}
              height={proj.height}
              alt={`Ảnh dự án ${proj.name}`}
              className="rounded object-cover mb-3"
              loading="lazy" // Lazy loading cho hiệu suất
            />
          </div>
        ))}
      </div>
    </section>
  );
}