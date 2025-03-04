# Images Directory

This directory is for storing local images used in the project.

## Usage Guidelines

1. Place your PNG, WebP, or other image files in this directory
2. Reference them in your components using the path `/images/filename.png`
3. Organize images in subdirectories if needed (e.g., `/images/icons/`, `/images/backgrounds/`)

## Example Usage in Components

```jsx
import Image from "next/image"

// Using a local image
<Image 
  src="/images/your-image.png" 
  alt="Description" 
  width={500} 
  height={300} 
/>
```

## Recommended Image Formats

- **WebP**: Best for web - smaller file size with good quality
- **PNG**: Good for images requiring transparency
- **SVG**: Ideal for icons and simple graphics (scales perfectly)
- **JPEG**: Use for photographs where transparency isn't needed