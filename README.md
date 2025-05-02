# 🐾 Virtual Pet Adoption Center

A modern, interactive web application for virtual pet adoption, built with React and styled with Tailwind CSS.


## ✨ Features

- Browse available pets with detailed profiles
- Filter pets by mood (Happy, Excited, Sad)
- Add new virtual pets to the adoption center
- Edit pet details and information
- Adopt virtual pets
- Responsive design for all screen sizes
- Modern, attractive UI with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn (v1.22.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/prasannathakshila1/virtual-pet-adoption.git
   cd virtual-pet-adoption
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
virtual-pet-adoption/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AddPetForm.js
│   │   ├── FilterBar.js
│   │   ├── PetCard.js
│   │   └── PetList.js
│   ├── pages/
│   │   └── HomePage.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🔧 API Services

The application uses the following API endpoints (simulated in the current version):

- `getAllPets()` - Fetches all available pets
- `addPet(petData)` - Adds a new pet
- `updatePet(id, petData)` - Updates pet information
- `adoptPet(id)` - Marks a pet as adopted
- `deletePet(id)` - Removes a pet from the system
- `filterPetsByMood(mood)` - Filters pets by their current mood

## 💻 Technology Stack

- **React**: Front-end library for building the user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for modern UI elements
- **React Hooks**: For state management and side effects

## 🎨 UI Customization

The application uses Tailwind CSS for styling. You can customize the look and feel by modifying the Tailwind configuration or directly editing the component classes.

### Theme Colors

The main color scheme uses:
- Primary gradient: `from-purple-600 to-blue-500`
- Mood indicators: green (Happy), yellow (Excited), red (Sad)
- Text colors: `text-gray-800` (headers), `text-gray-600` (body)
- Backgrounds: `bg-gray-50` (page), `bg-white` (cards)

## 📱 Responsive Design

The application is fully responsive and works on:
- Mobile phones
- Tablets
- Desktop computers

The grid layout automatically adjusts based on screen size:
- 1 column for mobile
- 2 columns for small tablets
- 3 columns for large tablets
- 4 columns for desktop

## 🔍 Future Enhancements

- User authentication and accounts
- Pet search functionality
- Pet statistics and happiness metrics
- Virtual pet care and interaction features
- Social sharing of pet profiles
- Dark mode support

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

If you have any questions or suggestions, please reach out to:
- Email: prasannathakshila9@gmail.com
- GitHub: Thakshila Prasanna (https://github.com/prasannathakshila1)

---

Made with ❤️ for pet lovers everywhere
