import { Leaf, Heart, Shield, Zap, Droplet, Sprout } from "lucide-react";

export default function Home() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
          <header className="bg-white shadow-sm sticky top-0 z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                  <div className="flex items-center gap-4">
                      <img
                          src="./vedehi_est2025.webp"
                          alt="Vedehi Organics logo - Premium organic oyster mushroom farm in India"
                          className="w-20 h-20 object-contain"
                          width="80"
                          height="80"
                      />
                      <div>
                          <div className="text-3xl font-bold text-gray-900">Vedehi Organics</div>
                          <p className="text-sm text-emerald-600 font-semibold">Happy Oyster</p>
                      </div>
                  </div>
              </div>
          </header>

          <main>
              <article>
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
                                  src="./oyster-mushroom-1296x728.webp"
                                  alt="Fresh organic oyster mushrooms from Vedehi Organics - naturally grown without chemicals"
                                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                                  loading="lazy"
                                  width="1296"
                                  height="728"
                              />
                          </div>
                          <div className="space-y-6">
                              <h2 className="text-3xl font-bold text-gray-900">Why Choose Oyster Mushrooms?</h2>
                              <p className="text-gray-600 text-lg leading-relaxed">
                                    Oyster mushrooms are a popular edible mushroom variety valued for their delicate texture and nutritional richness. They are widely used in healthy cooking and are an excellent alternative to meat due to their plant-based protein content.
                                    Oyster mushrooms are naturally low in calories and high in fiber, making them suitable for weight management and everyday meals.
                              </p>
                          </div>
                      </div>
                  </section>

              <section className="bg-white py-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Health Benefits of Oyster Mushrooms</h2>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                          <article className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                              <Heart className="w-12 h-12 text-emerald-600 mb-4" aria-hidden="true" />
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">Heart Health</h3>
                              <p className="text-gray-600 leading-relaxed">
                                  Rich in heart-healthy compounds that help reduce cholesterol levels and support cardiovascular function.
                              </p>
                          </article>

                          <article className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                              <Shield className="w-12 h-12 text-blue-600 mb-4" aria-hidden="true" />
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">Immune Boost</h3>
                              <p className="text-gray-600 leading-relaxed">
                                  Packed with beta-glucans and antioxidants that strengthen your immune system naturally.
                              </p>
                          </article>

                          <article className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                              <Zap className="w-12 h-12 text-orange-600 mb-4" aria-hidden="true" />
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">Energy & Vitality</h3>
                              <p className="text-gray-600 leading-relaxed">
                                  High in B vitamins and iron that help combat fatigue and boost your energy levels throughout the day.
                              </p>
                          </article>

                          <article className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                              <Droplet className="w-12 h-12 text-purple-600 mb-4" aria-hidden="true" />
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">Anti-Inflammatory</h3>
                              <p className="text-gray-600 leading-relaxed">
                                  Natural anti-inflammatory properties help reduce inflammation and support joint health.
                              </p>
                          </article>

                          <article className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                              <Sprout className="w-12 h-12 text-green-600 mb-4" aria-hidden="true" />
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">Rich in Protein</h3>
                              <p className="text-gray-600 leading-relaxed">
                                  Excellent plant-based protein source with all essential amino acids for muscle health and repair.
                              </p>
                          </article>

                          <article className="bg-gradient-to-br from-rose-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                              <Leaf className="w-12 h-12 text-rose-600 mb-4" aria-hidden="true" />
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">Weight Management</h3>
                              <p className="text-gray-600 leading-relaxed">
                                  Low in calories and high in fiber, perfect for maintaining a healthy weight while feeling satisfied.
                              </p>
                          </article>
                      </div>
                  </div>
              </section>

              <section className="py-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Nutritional Value of Oyster Mushrooms</h2>

                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                          <div>
                              <img
                                  src="./pexels-photo-1092730.webp"
                                  alt="Close up view of fresh organic oyster mushrooms showing texture and quality"
                                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                                  loading="lazy"
                                  width="800"
                                  height="600"
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
                  </div>
              </section>


              <section className="bg-white py-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Vedehi Organics?</h2>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                          <article className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                              <Leaf className="w-12 h-12 text-emerald-600 mb-4" aria-hidden="true" />
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">100% Organic</h3>
                              <p className="text-gray-600 leading-relaxed">
Organic oyster mushrooms are grown without synthetic pesticides, chemical fertilizers, or growth hormones. This ensures cleaner food, better nutrition, and improved safety. At Vedehi Organics, we follow chemical-free cultivation methods that protect both consumer health and the environment.
                              </p>
                          </article>

                          <article className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                              <Zap className="w-12 h-12 text-orange-600 mb-4" aria-hidden="true" />
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">Sustainable Farming Practices</h3>
                              <p className="text-gray-600 leading-relaxed">
                       Vedehi Organics follows a farm-to-table philosophy focused on sustainability, hygiene, and quality. Our oyster mushrooms are cultivated under controlled conditions using natural substrates and eco-friendly processes. Each harvest is carefully monitored to ensure freshness, consistency, and nutritional value.

                              </p>
                          </article>

                          <article className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">

                              <Heart className="w-12 h-12 text-rose-600 mb-4" aria-hidden="true" />
                              <h3 className="text-2xl font-bold text-gray-900 mb-3">Your Healthy Choice</h3>
                              <p className="text-gray-600 leading-relaxed">
If you are looking for fresh organic oyster mushrooms grown naturally in India, Vedehi Organics is your trusted source. Experience the taste, nutrition, and purity of farm fresh mushrooms and make a healthier choice for your family.
                              </p>
                          </article>
                      </div>
                  </div>
                    <div className="text-center mt-16">
                          <p className="animated-tagline text-emerald-600 text-4xl font-bold italic">Happy Oyster</p>
                    </div>
              </section>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-left mb-12">
                    <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
                </div>

                  <div className="grid md:grid-cols-2 gap-8 items-center mb-20">
                      <div>
                          <img
                             src="./two_friends.webp"
                                  alt="Founders of Vedehi Organics - Two friends passionate about organic mushroom farming in India"
                              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                              loading="lazy"
                              width="800"
                              height="600"
                          />
                      </div>
                      <div className="space-y-6">
                          <p className="text-gray-600 text-lg leading-relaxed">
                               Vedehi Organics was founded by two friends brought together by a shared passion for organic farming and healthy food.
                                What began as curiosity about clean, sustainable agriculture soon turned into a committed journey toward growing food the right way — naturally, responsibly, and honestly.
                                <br></br><br></br>
                                To build a strong foundation, Our grower are <strong>ICAR Certified, Oyster and Milky Mushroom Production Technology - Pune Agriculture College</strong>.
                                <br></br><br></br>
                                We believe that healthy food is not a luxury, but a necessity, and that true nutrition starts at the farm.
                                With this belief at the core, we chose to focus on mushroom cultivation — a food that is naturally nutritious, sustainable,
                                 and ideal for modern, health-conscious lifestyles.
                           </p>
                      </div>
                  </div>
              </section>

              <section className="bg-gradient-to-b from-emerald-50 to-white py-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                          <div className="space-y-6">
                              <h2 className="text-3xl font-bold text-gray-900">Locate Us</h2>
                              <p className="text-gray-600 text-lg leading-relaxed">
                                  Visit us to see our oyster mushroom farm and learn about our sustainable farming practices. We welcome visitors who are passionate about organic food and sustainable agriculture.
                              </p>
                              <a
                                  href="https://share.google/i8GaGxWq7hxbXgp1d"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                                  aria-label="View Vedehi Organics location on Google Maps"
                              >
                                  View on Google Maps
                              </a>
                          </div>
                          <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1427226213013!2d73.79088469999999!3d18.5676032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf88cec26845%3A0x767b5e36ada2f00c!2sVedehi%20Organics!5e0!3m2!1sen!2sin!4v1768890020502!5m2!1sen!2sin" style={{width="400" height="300" style="border:0;" allowfullscreen=""}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="bg-white py-20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12">
                          <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us</h2>
                          <p className="text-gray-600 text-lg">Connect with us on Instagram for recipes, farm updates, and organic living tips</p>
                      </div>

                      <div className="flex justify-center">
                          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg max-w-sm">
                              <div className="mb-6">
                                  <a
                                      href="https://instagram.com/vedehi_organics"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-block hover:scale-105 transition-transform"
                                      aria-label="Scan to follow Vedehi Organics on Instagram"
                                  >
                                      <img
                                          src="./vedehi_insta.png"
                                          alt="Instagram QR code for Vedehi Organics - Scan to follow us"
                                          className="w-72 h-72 rounded-lg shadow-lg"
                                          width="288"
                                          height="288"
                                      />
                                  </a>
                              </div>
                              <div className="text-center">
                                  <p className="text-gray-700 font-semibold mb-2">Scan to Follow</p>
                                  <a
                                      href="https://instagram.com/vedehi_organics"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-emerald-600 hover:text-emerald-700 font-bold text-lg transition-colors"
                                  >
                                      @vedehi_organics
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              </article>
          </main>

          <footer className="bg-gray-900 text-white py-12 mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
                            <div>
                                <h3 className="text-emerald-400 font-bold mb-2 text-lg">Recipes</h3>
                                <p>
                                    <a
                                        href="https://youtube.com/playlist?list=PLuVjRcLYIQxKc8YeAJpSSJi_PYKvYvjcY&si=RspR7OfOUhtvnXaM"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-300 hover:text-emerald-400 transition-colors"
                                        aria-label="Watch oyster mushroom recipes on YouTube"
                                    >
                                    Oyster Mushroom Recipes
                                    </a>
                                </p>
                            </div>

                      <div>
                          <h3 className="text-emerald-400 font-bold mb-2 text-lg">Contact Us</h3>
                          <p className="text-gray-300">
                              <a href="mailto:vedehiorganics@gmail.com" className="hover:text-emerald-400 transition-colors">
                                  vedehiorganics@gmail.com
                              </a>
                          </p>
                      </div>
                      <div>
                          <h3 className="text-emerald-400 font-bold mb-2 text-lg">Order Now</h3>
                          <p className="text-gray-300">
                              <a href="tel:+919168450500" className="hover:text-emerald-400 transition-colors">9168450500</a>,
                              <a href="tel:+917875067876" className="hover:text-emerald-400 transition-colors ml-1">7875067876</a>
                          </p>
                      </div>
                      <div>
                          <h3 className="text-emerald-400 font-bold mb-2 text-lg">Website</h3>
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
