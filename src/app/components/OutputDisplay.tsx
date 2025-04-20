'use client';

interface Output {
  type: 'command' | 'output';
  content: string;
}

interface OutputDisplayProps {
  output: Output;
}

export default function OutputDisplay({ output }: OutputDisplayProps) {
  const renderContent = (content: string) => {
    // Split content by newlines and process each line
    return content.split('\n').map((line, index) => {
      // Check if the line contains a link instruction
      if (line.includes('Type \'project') && line.includes('-v\'')) {
        return (
          <div key={index} className="text-terminal-green">
            {line}
          </div>
        );
      }
      return (
        <div key={index} className="text-white">
          {line}
        </div>
      );
    });
  };

  return (
    <div className="mb-4">
      {output.type === 'command' ? (
        <div className="text-terminal-green">$ {output.content}</div>
      ) : (
        <div className="whitespace-pre-wrap">
          {renderContent(output.content)}
        </div>
      )}
    </div>
  );
} 