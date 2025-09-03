import { Component, ErrorInfo, ReactNode } from 'react';
import Scene3D from './3DScene';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('WebGL Error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // Fallback UI with CSS animations instead of 3D
      return (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
        </div>
      );
    }

    return this.props.children;
  }
}

export default function Safe3DScene() {
  return (
    <WebGLErrorBoundary>
      <Scene3D />
    </WebGLErrorBoundary>
  );
}