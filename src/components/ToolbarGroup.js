import React from 'react';

/**
 * ToolbarGroup
 *
 * A group of associated controls.
 */
export function ToolbarGroup({ children }) {
  return (
    <div className="toolbar-button-group">
      {children}
    </div>
  );
}
