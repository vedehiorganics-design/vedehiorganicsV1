import { Leaf, Heart, Shield, Zap, Droplet, Sprout } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        Farm Fresh Organic Oyster Mushrooms by Vedehi Organics
      </h1>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/vedehi_est2025.png"
              alt="Fresh organic oyster mushrooms grown at Vedehi Organics farm"
              className="w-20 h-20 object-contain"
              loading="lazy"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Vedehi Organics
              </h2>
              <p className="text-sm text-emerald-600 font-semibold">
                Happy Oyster
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Premium Organic Oyster Mushrooms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the incredible taste and health benefits of our organically grown
              oyster mushrooms. Nature’s superfood, cultivated with care for your wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div>
              <img
                src="https://images.pexels.com/photos/6157027/pexels-photo-6157027.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh white oyster mushrooms on natural background"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Why Choose Oyster Mushrooms?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Oyster mushrooms are rich in plant-based protein, vitamin D, and antioxidants,
                making them ideal for healthy daily cooking.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Health Benefits of Oyster Mushrooms
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Benefit icon={<Heart />} title="Heart Health">
                Helps reduce cholesterol and supports cardiovascular wellness.
              </Benefit>

              <Benefit icon={<Shield />} title="Immune Boost">
                Strengthens immunity with beta-glucans and antioxidants.
              </Benefit>

              <Benefit icon={<Zap />} title="Energy & Vitality">
                Rich in B-vitamins that help fight fatigue.
              </Benefit>

              <Benefit icon={<Droplet />} title="Anti-Inflammatory">
                Supports joint and muscle health naturally.
              </Benefit>

              <Benefit icon={<Sprout />} title="High Protein">
                Excellent plant-based protein source.
              </Benefit>

              <Benefit icon={<Leaf />} title="Weight Management">
                Low-calorie, high-fiber food for healthy weight control.
              </Benefit>
            </div>
          </div>
        </section>

        {/* TAGLINE */}
        <section className="py-20 text-center">
          <p className="animated-tagline text-emerald-600 text-4xl font-bold italic">
            Happy Oyster
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Vedehi Organics. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

/* Reusable Benefit Card */
function Benefit({
  icon,
  title,
  children
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg">
      <div className="w-12 h-12 text-emerald-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}
