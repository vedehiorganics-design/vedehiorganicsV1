import { Leaf, Heart, Shield, Zap, Droplet, Sprout } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <img src="/vedehi_est2025.png" alt="Fresh organic oyster mushrooms grown at Vedehi Organics farm" className="w-20 h-20 object-contain" loading="lazy" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Vedehi Organics | Farm Fresh Oyster Mushrooms</h1>
              <p className="text-sm text-emerald-600 font-semibold">Happy Oyster</p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Premium Organic Oyster Mushrooms</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the incredible taste and health benefits of our organically grown oyster mushrooms.
              Nature's superfood, cultivated with care for your wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
            <div>
              <img
                src="https://images.pexels.com/photos/6157027/pexels-photo-6157027.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh white oyster mushrooms on beige background"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Why Choose Oyster Mushrooms?</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Oyster mushrooms are not just delicious, they're packed with nutrients that support your overall health.
                Their delicate, slightly sweet flavor and velvety texture make them perfect for any cuisine.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Health Benefits of Oyster Mushrooms</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Heart className="w-12 h-12 text-emerald-600 mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Heart Health</h4>
                <p className="text-gray-600 leading-relaxed">
                  Rich in heart-healthy compounds that help reduce cholesterol levels and support cardiovascular function.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Immune Boost</h4>
                <p className="text-gray-600 leading-relaxed">
                  Packed with beta-glucans and antioxidants that strengthen your immune system naturally.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Zap className="w-12 h-12 text-orange-600 mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Energy & Vitality</h4>
                <p className="text-gray-600 leading-relaxed">
                  High in B vitamins and iron that help combat fatigue and boost your energy levels throughout the day.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Droplet className="w-12 h-12 text-purple-600 mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Anti-Inflammatory</h4>
                <p className="text-gray-600 leading-relaxed">
                  Natural anti-inflammatory properties help reduce inflammation and support joint health.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Sprout className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Rich in Protein</h4>
                <p className="text-gray-600 leading-relaxed">
                  Excellent plant-based protein source with all essential amino acids for muscle health and repair.
                </p>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <Leaf className="w-12 h-12 text-rose-600 mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Weight Management</h4>
                <p className="text-gray-600 leading-relaxed">
                  Low in calories and high in fiber, perfect for maintaining a healthy weight while feeling satisfied.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Nutritional Value of Oyster Mushrooms</h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Nutrition and Healthy Food"
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                />
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nutritional Information Per 100g Serving</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-lg font-semibold text-gray-700">Calories</span>
                    <span className="text-2xl font-bold text-emerald-600">33 kcal</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-lg font-semibold text-gray-700">Plant-Based Protein</span>
                    <span className="text-2xl font-bold text-emerald-600">3.3g</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-lg font-semibold text-gray-700">Carbohydrates</span>
                    <span className="text-2xl font-bold text-emerald-600">6.1g</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-lg font-semibold text-gray-700">Dietary Fiber</span>
                    <span className="text-2xl font-bold text-emerald-600">2.3g</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-lg font-semibold text-gray-700">Fat</span>
                    <span className="text-2xl font-bold text-emerald-600">0.4g</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-lg font-semibold text-gray-700">Vitamin D</span>
                    <span className="text-2xl font-bold text-emerald-600">0.2µg</span>
                  </div>

                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-lg font-semibold text-gray-700">Iron</span>
                    <span className="text-2xl font-bold text-emerald-600">1.3mg</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-700">Potassium</span>
                    <span className="text-2xl font-bold text-emerald-600">420mg</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-emerald-700">Rich in:</strong> B Vitamins (B1, B2, B3, B5, B6), Folate,
                    Phosphorus, Zinc, Copper, and powerful antioxidants including ergothioneine.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="animated-tagline text-emerald-600 text-4xl font-bold italic">Happy Oyster</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
            <div>
              <h4 className="text-emerald-400 font-bold mb-2">Contact Us</h4>
              <p className="text-gray-300">vedehiorganics@gmail.com</p>
            </div>
            <div>
              <h4 className="text-emerald-400 font-bold mb-2">For Order</h4>
              <p className="text-gray-300">9168450500, 7875067876</p>
            </div>
            <div>
              <h4 className="text-emerald-400 font-bold mb-2">Website</h4>
              <p className="text-gray-300">vedehiorganics.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">Copyright 2025 Vedehi Organics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

