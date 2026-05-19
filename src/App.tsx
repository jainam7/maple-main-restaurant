/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import InteractiveMenu from './components/InteractiveMenu';
import About from './components/About';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="bg-[var(--bg-main)] selection:bg-maple selection:text-white relative">
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <InteractiveMenu />
        <About />
      </main>
    </div>
  );
}
