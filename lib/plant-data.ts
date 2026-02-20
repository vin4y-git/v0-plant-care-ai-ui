export interface Plant {
  id: string
  name: string
  subtitle: string
  image: string
  description: string
  conditions: Condition[]
  info: string
  careTips: string[]
  features: string[]
  gallery: string[]
}

export interface Condition {
  label: string
  value: string
  color: "pink" | "orange" | "blue" | "green"
}

export const plants: Plant[] = [
  {
    id: "areca-palm",
    name: "Areca Palm",
    subtitle: "Indoor plant",
    image: "/images/areca-palm.jpg",
    description:
      "This elegant indoor palm features soft, arching fronds that bring a tropical touch to any space.",
    conditions: [
      { label: "Lighting", value: "Bright indirect", color: "pink" },
      { label: "Temperature", value: "Warm", color: "orange" },
      { label: "Humidity", value: "High", color: "blue" },
      { label: "Soil", value: "Well-drained", color: "green" },
      { label: "Growth", value: "Moderate", color: "orange" },
      { label: "Caution", value: "Non-toxic", color: "green" },
    ],
    info: "The Areca Palm is a popular indoor palm known for its graceful arching fronds. It naturally purifies the air and adds a tropical feel to any room. Native to Madagascar, it thrives in bright, indirect light.",
    careTips: [
      "Water when top inch of soil is dry",
      "Mist leaves regularly for humidity",
      "Fertilize monthly during growing season",
      "Repot every 2-3 years",
    ],
    features: [
      "Air purifying",
      "Pet safe",
      "Low maintenance",
      "Tropical appearance",
    ],
    gallery: ["/images/areca-palm.jpg", "/images/monstera.jpg", "/images/fern.jpg", "/images/pothos.jpg"],
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    subtitle: "Indoor plant",
    image: "/images/aloe-vera.jpg",
    description:
      "A popular succulent with thick, fleshy leaves filled with natural gel. It's known for its healing properties.",
    conditions: [
      { label: "Lighting", value: "Full sun", color: "pink" },
      { label: "Temperature", value: "Dry", color: "orange" },
      { label: "Humidity", value: "Dry", color: "blue" },
      { label: "Soil", value: "Potting soil", color: "green" },
      { label: "Growth", value: "Moderate", color: "orange" },
      { label: "Caution", value: "Non-toxic", color: "green" },
    ],
    info: "Aloe Vera is a succulent plant species known for its medicinal properties. The gel inside its thick leaves is commonly used for burns, skin care, and various health remedies. It's an incredibly hardy plant that requires minimal care.",
    careTips: [
      "Water deeply but infrequently",
      "Allow soil to dry between waterings",
      "Place in bright, direct sunlight",
      "Use well-draining cactus soil",
    ],
    features: [
      "Medicinal gel",
      "Drought tolerant",
      "Air purifying",
      "Easy to propagate",
    ],
    gallery: ["/images/aloe-vera.jpg", "/images/snake-plant.jpg", "/images/pothos.jpg", "/images/bonsai-tree.jpg"],
  },
  {
    id: "bonsai-tree",
    name: "Bonsai Tree",
    subtitle: "Indoor plant",
    image: "/images/bonsai-tree.jpg",
    description:
      "A symbol of harmony and patience, the bonsai is a miniature tree cultivated with care and artistry.",
    conditions: [
      { label: "Lighting", value: "Bright indirect", color: "pink" },
      { label: "Temperature", value: "Moderate", color: "orange" },
      { label: "Humidity", value: "Moderate", color: "blue" },
      { label: "Soil", value: "Bonsai mix", color: "green" },
      { label: "Growth", value: "Slow", color: "orange" },
      { label: "Caution", value: "Non-toxic", color: "green" },
    ],
    info: "Bonsai is the Japanese art form of growing miniature trees in containers. These living sculptures require careful attention to watering, pruning, and shaping to maintain their miniature size and artistic form.",
    careTips: [
      "Water when soil surface feels dry",
      "Prune regularly to maintain shape",
      "Fertilize during growing season",
      "Protect from extreme temperatures",
    ],
    features: [
      "Artistic form",
      "Long-lived",
      "Meditative hobby",
      "Compact size",
    ],
    gallery: ["/images/bonsai-tree.jpg", "/images/areca-palm.jpg", "/images/fern.jpg", "/images/snake-plant.jpg"],
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    subtitle: "Indoor plant",
    image: "/images/snake-plant.jpg",
    description:
      "With its upright sword-like leaves and bold green patterns, the snake plant is a favorite for modern homes.",
    conditions: [
      { label: "Lighting", value: "Full sun", color: "pink" },
      { label: "Temperature", value: "Dry", color: "orange" },
      { label: "Humidity", value: "Dry", color: "blue" },
      { label: "Soil", value: "Well-drained", color: "green" },
      { label: "Growth", value: "Slow", color: "orange" },
      { label: "Caution", value: "Mild toxic", color: "pink" },
    ],
    info: "The Snake Plant is a low-maintenance houseplant with upright, sword-like leaves. Known for purifying air and tolerating neglect, it's perfect for beginners. It can survive in low light and infrequent watering.",
    careTips: [
      "Water sparingly, every 2-3 weeks",
      "Tolerates low to bright indirect light",
      "Avoid overwatering to prevent root rot",
      "Wipe leaves to remove dust",
    ],
    features: [
      "Air purifying",
      "Extremely hardy",
      "Low light tolerant",
      "Architectural shape",
    ],
    gallery: ["/images/snake-plant.jpg", "/images/monstera.jpg", "/images/aloe-vera.jpg", "/images/areca-palm.jpg"],
  },
  {
    id: "fern",
    name: "Bird's Nest Fern",
    subtitle: "Indoor plant",
    image: "/images/fern.jpg",
    description:
      "A lush tropical fern with broad, wavy fronds that create an elegant rosette pattern. Perfect for humid spots.",
    conditions: [
      { label: "Lighting", value: "Low indirect", color: "pink" },
      { label: "Temperature", value: "Warm", color: "orange" },
      { label: "Humidity", value: "High", color: "blue" },
      { label: "Soil", value: "Peat-based", color: "green" },
      { label: "Growth", value: "Moderate", color: "orange" },
      { label: "Caution", value: "Non-toxic", color: "green" },
    ],
    info: "The Bird's Nest Fern is a tropical plant known for its large, rippled fronds that unfurl from a central rosette. It thrives in humid environments and makes an excellent bathroom or kitchen plant.",
    careTips: [
      "Keep soil consistently moist",
      "Provide high humidity",
      "Avoid direct sunlight",
      "Do not water the center rosette",
    ],
    features: [
      "Pet safe",
      "Humidity loving",
      "Elegant form",
      "Air purifying",
    ],
    gallery: ["/images/fern.jpg", "/images/pothos.jpg", "/images/monstera.jpg", "/images/areca-palm.jpg"],
  },
  {
    id: "monstera",
    name: "Monstera Deliciosa",
    subtitle: "Indoor plant",
    image: "/images/monstera.jpg",
    description:
      "Known as the Swiss Cheese Plant, its iconic split leaves make it a stunning centerpiece in any room.",
    conditions: [
      { label: "Lighting", value: "Bright indirect", color: "pink" },
      { label: "Temperature", value: "Warm", color: "orange" },
      { label: "Humidity", value: "Moderate", color: "blue" },
      { label: "Soil", value: "Well-drained", color: "green" },
      { label: "Growth", value: "Fast", color: "orange" },
      { label: "Caution", value: "Mild toxic", color: "pink" },
    ],
    info: "Monstera Deliciosa is a tropical plant famous for its large, perforated leaves. Originally from Central American rainforests, it has become one of the most popular houseplants worldwide. It can grow quite large indoors with proper support.",
    careTips: [
      "Water when top 2 inches of soil are dry",
      "Provide a moss pole for climbing",
      "Clean leaves monthly",
      "Fertilize in spring and summer",
    ],
    features: [
      "Iconic leaves",
      "Fast growing",
      "Statement plant",
      "Easy to propagate",
    ],
    gallery: ["/images/monstera.jpg", "/images/snake-plant.jpg", "/images/aloe-vera.jpg", "/images/fern.jpg"],
  },
]
