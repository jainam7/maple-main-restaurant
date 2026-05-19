import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for reservations
  app.post("/api/reserve", (req, res) => {
    const { name, email, date, time, guests } = req.body;
    
    console.log(`New Reservation: ${name} (${email}) - ${date} at ${time} for ${guests} people`);
    
    // In a real app, you would use an email service here.
    // For this example, we return success.
    res.json({ 
      success: true, 
      message: `Reservation confirmed! A confirmation email has been sent to ${email}.`,
      details: { name, date, time, guests }
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
