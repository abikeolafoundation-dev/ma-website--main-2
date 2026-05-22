
export interface SocialPost {
  id: string;
  platform: 'instagram' | 'twitter' | 'facebook' | 'linkedin' | 'youtube';
  type: 'image' | 'text' | 'combined';
  content: string;
  imageUrl?: string;
  author: string;
  timestamp: string;
  likes?: number;
  shares?: number;
  url?: string;
}

export interface SocialStats {
  platform: string;
  followers: string;
  handle: string;
  url: string;
}

class SocialService {
  private posts: SocialPost[] = [
    {
      id: '1',
      platform: 'instagram',
      type: 'image',
      content: 'Moments of hope from our recent community gathering.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP2E-JRo63QE6aUQ6zPlKKh_VTGjkIwx3KmGS_Mcub_NYeUzalwmiORh5MWwcStoFYTSOLgU0LODtHqa07bj99vOEiOlDuYMFih1hVccXKh4VZECbKQwe7E2mipb4IfGQBoKvatlTUEc-bwB4jP5koiapGUA1MNqj_ugd_7d3dB2E1BTS1KYNgGuLIFui8dh5ayCAG4ZVuX_o4WCsDrqySXwa03KOSm6X9WWurmOqGL29zNICidTJCrliqUs8uUFFJgSmiZCGmwbA',
      author: '@AbikeolaCF',
      timestamp: '2h ago',
      likes: 245
    },
    {
      id: '2',
      platform: 'instagram',
      type: 'image',
      content: 'Water pump installation project completion.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByLg9i5LGfNv25_dp5UzCRXh6TXTIS9k2u366Eer6dVB_Bwmt9i6CbQprObTmBeTGdyRKEj2GHQBOWcZl8bnEVZPoLLBxFL3lm9jN39VGDWxLeKGlHLgJ-HSp5kKWwYQZF0f7XIA-rulzVNjMhM0LULMaP-WUuqtl5ZJ8i5cO-TLy1rfM1aR2mOyDecyTRiEcb6Ayf2ReFEu9m5ofEo1S4CIHX-Aeot2tzRlOk85Rc7ntxIX-dP3Kh8kIBdaFiTMI3GeF3_C-3L9E',
      author: '@AbikeolaCF',
      timestamp: '5h ago',
      likes: 120
    },
    {
      id: '3',
      platform: 'instagram',
      type: 'image',
      content: 'Our volunteers standing with community leaders.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMHv1JLbN6Gv2W3UxMnKQnLYjivWFzmuRv8GE-XvXW5WdW-h5SqgYZvK9TlkfOTwnwPtkzI806hN71Emht89GThl9p3O03fn7CTqYqCykjVg7apeaj91d9qDJFX9FMR9k_lTHMez0sqcki2mtWf-s3q-fSaPbV08WXmkXADa4Xa-uKZ95i1jYnsPtGOwYweKHzQgDOoH7uAZ8gKc0Ll8MLYZJaqXaXQb_IO36VBRS7PrjiJ2pVwC9YZcBT7wkOA0JYuwWhdBVTfwE',
      author: '@AbikeolaCF',
      timestamp: '8h ago',
      likes: 312
    },
    {
      id: '4',
      platform: 'instagram',
      type: 'image',
      content: 'Mentorship session with children.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTwoHPwLnu3DXaMKL4a0mHxyj1kUqOEVOXTbxYPW3wx67SU2cTqivTghKiCtbGfONpsovBXZOExu1UxyDW5JSEQ7zqJFhlPq1pJjGy2DU1SYEaisd0E_bFVyWXqLkROv5D_2u2fbM-HamKBgHcheqdGAOOTa5CLexGUiN5QdIiKz1epspKdIAfZ9WL3TWT08rHWJuzDJRxxFtp9TkKYW01wEaVlpuvUJMWkgbCdubiYXmviK2tX4jlrH-snjMfWTCXrqpPyPLKwpI',
      author: '@AbikeolaCF',
      timestamp: '1d ago',
      likes: 890
    },
    {
      id: '5',
      platform: 'twitter',
      type: 'text',
      content: 'Today we completed our 50th borehole project for the year! Clean water is a human right. Proud of our ground team. #WaterForLife #FoundationImpact',
      author: '@AbikeolaCF',
      timestamp: '2h ago',
      likes: 245,
      shares: 89
    },
    {
      id: '6',
      platform: 'twitter',
      type: 'text',
      content: 'Transparency is our core value. Our Q3 Impact Report is now live on our website. Every donation counts. #Accountability #Philanthropy',
      author: '@AbikeolaCF',
      timestamp: 'Yesterday',
      likes: 1200,
      shares: 312
    },
    {
      id: '7',
      platform: 'facebook',
      type: 'combined',
      content: "Reflection on a year of growth. We started with a simple vision to bridge the gap in healthcare access. Today, looking back at the 5,000 families we've reached, we are reminded that stewardship is not just about managing hope. Thank you to our incredible donors.",
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP2E-JRo63QE6aUQ6zPlKKh_VTGjkIwx3KmGS_Mcub_NYeUzalwmiORh5MWwcStoFYTSOLgU0LODtHqa07bj99vOEiOlDuYMFih1hVccXKh4VZECbKQwe7E2mipb4IfGQBoKvatlTUEc-bwB4jP5koiapGUA1MNqj_ugd_7d3dB2E1BTS1KYNgGuLIFui8dh5ayCAG4ZVuX_o4WCsDrqySXwa03KOSm6X9WWurmOqGL29zNICidTJCrliqUs8uUFFJgSmiZCGmwbA',
      author: 'Abikeola Charitable Foundation',
      timestamp: 'October 24 at 10:00 AM'
    }
  ];

  async getLatestPosts(): Promise<SocialPost[]> {
    try {
      const response = await fetch('/api/social-posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      return await response.json();
    } catch (error) {
      console.error('Error fetching social posts:', error);
      // Return cached/fallback data if API fails
      return this.posts;
    }
  }

  // Fetch live follower counts from each platform (basic scraping). Returns fallback values if fetch fails.
  async getStats(): Promise<SocialStats[]> {
    const platforms: SocialStats[] = [
      { platform: 'YouTube', followers: '0', handle: '@AbikeolaFoundation', url: 'https://www.youtube.com/@AbikeolaFoundation' },
      { platform: 'Twitter', followers: '0', handle: '@AbikeolaCharity', url: 'https://x.com/AbikeolaCharity' },
      { platform: 'Facebook', followers: '0', handle: 'Abikeola Foundation', url: 'https://www.facebook.com/AbikeolaCharity' },
      { platform: 'LinkedIn', followers: '0', handle: 'Abikeola CF', url: 'https://www.linkedin.com/in/abikeola-charitable-foundation-27b82140b/' }
    ];

    // Helper parsers for each service – very simple regex based scraping.
    const parsers: Record<string, (html: string) => string> = {
      YouTube: (html) => {
        const match = html.match(/([\d,.]+)\s+subscribers/i);
        return match ? match[1].replace(/,/g, '') + ' subscribers' : '0';
      },
      Twitter: (html) => {
        const match = html.match(/"followers_count"\s*:\s*([\d]+)/i);
        return match ? Number(match[1]).toLocaleString() : '0';
      },
      Facebook: (html) => {
        const match = html.match(/"edge_follow_count"\s*:\s*([\d]+)/i);
        return match ? Number(match[1]).toLocaleString() : '0';
      },
      LinkedIn: (html) => {
        const match = html.match(/"memberCount"\s*:\s*([\d]+)/i);
        return match ? Number(match[1]).toLocaleString() : '0';
      }
    };

    await Promise.all(
      platforms.map(async (p) => {
        try {
          const resp = await fetch(p.url, { method: 'GET' });
          if (resp.ok) {
            const txt = await resp.text();
            const parser = parsers[p.platform];
            const count = parser ? parser(txt) : '0';
            p.followers = count;
          }
        } catch (e) {
          console.warn('Failed to fetch stats for', p.platform, e);
        }
      })
    );
    return platforms;
  }
}

export const socialService = new SocialService();
