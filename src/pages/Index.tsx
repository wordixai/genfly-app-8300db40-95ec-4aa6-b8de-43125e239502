import { MessageSquare, Globe, Github, Paintbrush, Sparkles } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="container px-4 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            A superhuman full stack<br />product engineer.
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Feature 1 */}
          <FeatureCard
            icon={<MessageSquare size={24} className="text-white" />}
            title="Instant & intuitive"
            description="Live rendering, handles image input, has instant undo and lets you collaborate with branching. The AI fixes your bugs. One-click deploy when ready."
          />

          {/* Feature 2 */}
          <FeatureCard
            icon={<Paintbrush size={24} className="text-white" />}
            title="Beautiful design"
            description="We believe your product should look good. Lovable follows best practice UI & UX principles to make sure every idea you bring to life is beautifully designed."
          />

          {/* Feature 3 */}
          <FeatureCard
            icon={<Globe size={24} className="text-white" />}
            title="Support any backend"
            description="Lovable has support for databases, API integrations and back-end functionality. Connect your own or use our Supabase connector."
          />

          {/* Feature 4 */}
          <FeatureCard
            icon={<Sparkles size={24} className="text-white" />}
            title="Select & edit"
            description="The accuracy you need to make fine grained changes. With Select & Edit you click an element and describe what you want updated."
          />

          {/* Feature 5 */}
          <FeatureCard
            icon={<Github size={24} className="text-white" />}
            title="Github integration"
            description="Connect Lovable to your GitHub account to automatically sync the code to your repository. Perfect for project hand offs and more advanced workflows."
          />
        </div>
      </div>
    </div>
  );
};

export default Index;