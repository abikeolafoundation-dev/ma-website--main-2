import express from "express";
import path from "path";
import cors from "cors";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3001;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get("/api/social-posts", async (req, res) => {
    // This is the "Engine" that would normally fetch from APIs
    // For now, we provide structured data that reflects the real accounts
    // but can be extended with real API calls using the keys in .env
    
    const posts = [
      {
        id: 'yt-1',
        platform: 'youtube',
        type: 'combined',
        content: 'Our latest documentary on the Waqf Model is now live. See how we are building sustainable futures.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP2E-JRo63QE6aUQ6zPlKKh_VTGjkIwx3KmGS_Mcub_NYeUzalwmiORh5MWwcStoFYTSOLgU0LODtHqa07bj99vOEiOlDuYMFih1hVccXKh4VZECbKQwe7E2mipb4IfGQBoKvatlTUEc-bwB4jP5koiapGUA1MNqj_ugd_7d3dB2E1BTS1KYNgGuLIFui8dh5ayCAG4ZVuX_o4WCsDrqySXwa03KOSm6X9WWurmOqGL29zNICidTJCrliqUs8uUFFJgSmiZCGmwbA',
        author: 'Abikeola Foundation',
        timestamp: '1 day ago',
        url: 'https://www.youtube.com/@AbikeolaFoundation'
      },
      {
        id: 'x-1',
        platform: 'twitter',
        type: 'text',
        content: 'Alhamdulillah! Today we reached a milestone of 50 scholarships awarded to orphans in the North-East region. Thank you to our donors for making this possible. #EducationForAll #AbikeolaFoundation',
        author: '@AbikeolaCharity',
        timestamp: '4h ago',
        likes: 420,
        shares: 156,
        url: 'https://x.com/AbikeolaCharity'
      },
      {
        id: 'li-1',
        platform: 'linkedin',
        type: 'combined',
        content: 'We are pleased to announce our strategic partnership with the International Waqf Congress to standardize our transparency reporting protocols. Professionalism in charity is not an option, but a duty.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMHv1JLbN6Gv2W3UxMnKQnLYjivWFzmuRv8GE-XvXW5WdW-h5SqgYZvK9TlkfOTwnwPtkzI806hN71Emht89GThl9p3O03fn7CTqYqCykjVg7apeaj91d9qDJFX9FMR9k_lTHMez0sqcki2mtWf-s3q-fSaPbV08WXmkXADa4Xa-uKZ95i1jYnsPtGOwYweKHzQgDOoH7uAZ8gKc0Ll8MLYZJaqXaXQb_IO36VBRS7PrjiJ2pVwC9YZcBT7wkOA0JYuwWhdBVTfwE',
        author: 'Abikeola Charitable Foundation',
        timestamp: '2 days ago',
        url: 'https://www.linkedin.com/in/abikeola-charitable-foundation-27b82140b/'
      },
      {
        id: 'x-2',
        platform: 'twitter',
        type: 'text',
        content: 'Transparency is our core value. Our Q3 Impact Report is now live on our website. Every donation counts. #Accountability #Philanthropy',
        author: '@AbikeolaCharity',
        timestamp: 'Yesterday',
        likes: 1200,
        shares: 312,
        url: 'https://x.com/AbikeolaCharity'
      },
      {
        id: 'yt-2',
        platform: 'youtube',
        type: 'image',
        content: 'Mentions of hope from our visit to the new healthcare clinic.',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTwoHPwLnu3DXaMKL4a0mHxyj1kUqOEVOXTbxYPW3wx67SU2cTqivTghKiCtbGfONpsovBXZOExu1UxyDW5JSEQ7zqJFhlPq1pJjGy2DU1SYEaisd0E_bFVyWXqLkROv5D_2u2fbM-HamKBgHcheqdGAOOTa5CLexGUiN5QdIiKz1epspKdIAfZ9WL3TWT08rHWJuzDJRxxFtp9TkKYW01wEaVlpuvUJMWkgbCdubiYXmviK2tX4jlrH-snjMfWTCXrqpPyPLKwpI',
        author: 'Abikeola Foundation',
        timestamp: '3 days ago',
        url: 'https://www.youtube.com/@AbikeolaFoundation'
      }
    ];

    res.json(posts);
  });

  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = req.body;

      if (!email || typeof email !== "string") {
        return res.status(400).json({
          success: false,
          message: "Email address is required."
        });
      }

      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return res.status(400).json({
          success: false,
          message: "Please enter a valid email address."
        });
      }

      const subscriberEmail = email.trim().toLowerCase();
      const subscribersFilePath = path.join(process.cwd(), "subscribers.json");

      let subscribers: any[] = [];
      if (fs.existsSync(subscribersFilePath)) {
        try {
          const fileData = fs.readFileSync(subscribersFilePath, "utf8");
          subscribers = JSON.parse(fileData);
          if (!Array.isArray(subscribers)) {
            subscribers = [];
          }
        } catch (readError) {
          console.error("Error reading subscribers file, initializing empty list:", readError);
          subscribers = [];
        }
      }

      // Check if email already exists
      const isAlreadySubscribed = subscribers.some(
        (sub: any) => sub.email.toLowerCase() === subscriberEmail
      );

      if (isAlreadySubscribed) {
        return res.status(400).json({
          success: false,
          message: "This email is already subscribed to our newsletter."
        });
      }

      // Add new subscriber
      subscribers.push({
        email: subscriberEmail,
        timestamp: new Date().toISOString()
      });

      // Save back to file
      fs.writeFileSync(subscribersFilePath, JSON.stringify(subscribers, null, 2), "utf8");

      /*
      // PRODUCTION INTEGRATION TEMPLATE (e.g. Resend, Mailchimp, Brevo)
      // To send a real email or push to a service in production:
      //
      // 1. Install Resend: npm i resend
      // 2. Import Resend: import { Resend } from 'resend';
      // 3. Initialize: const resend = new Resend(process.env.RESEND_API_KEY);
      // 4. Send email:
      //    await resend.emails.send({
      //      from: 'Abikeola Foundation <newsletter@abikeolafoundation.org>',
      //      to: subscriberEmail,
      //      subject: 'Welcome to Abikeola Foundation Newsletter!',
      //      html: '<p>Thank you for subscribing to our newsletter! We will keep you updated.</p>'
      //    });
      */

      return res.status(200).json({
        success: true,
        message: "Thank you for subscribing! You've been successfully added to our newsletter."
      });
    } catch (error) {
      console.error("Subscription endpoint error:", error);
      return res.status(500).json({
        success: false,
        message: "An internal server error occurred. Please try again later."
      });
    }
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
