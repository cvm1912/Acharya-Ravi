interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

export const PageHeader = ({ title, subtitle, description, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
      )}
      
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      )}

      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      </div>

      <div className="container-max section-padding py-0 relative">
        <div className={`max-w-3xl ${backgroundImage ? "text-background" : ""}`}>
          {subtitle && (
            <span className={`font-medium text-sm uppercase tracking-wider ${backgroundImage ? "text-primary-foreground/80" : "text-primary"}`}>
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-3 mb-6">
            {title}
          </h1>
          {description && (
            <p className={`text-lg ${backgroundImage ? "text-background/80" : "text-muted-foreground"}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
