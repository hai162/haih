const vscode = require('vscode');

function getExtensionAtCursor() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const document = editor.document;
    const selection = editor.selection;
    const cursorPosition = selection.active;
    const filePath = document.uri.fsPath;
    const fileExtension = filePath.split('.').pop();
    
    vscode.window.showInformationMessage(`File extension: ${fileExtension}`);
  } else {
    vscode.window.showInformationMessage('No active editor');
  }
}

// You would typically call this function from a command or some other trigger
