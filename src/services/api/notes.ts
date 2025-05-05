import { API_URL } from '../../config';
import { Note } from '../../types/note';

export const getNotes = async (userId: string): Promise<Note[]> => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}/notes`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Note[] = await response.json();
    return data;
  } catch (error) {
    console.error("Could not fetch notes:", error);
    return [];
  }
};

export const createNote = async (userId: string, note: Omit<Note, 'id'>): Promise<Note | null> => {
    try {
      const response = await fetch(`${API_URL}/users/${userId}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Note = await response.json();
      return data;
    } catch (error) {
      console.error("Could not create note:", error);
      return null;
    }
  };

  export const updateNote = async (userId: string, noteId: string, note: Note): Promise<Note | null> => {
    try {
      const response = await fetch(`${API_URL}/users/${userId}/notes/${noteId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Note = await response.json();
      return data;
    } catch (error) {
      console.error("Could not update note:", error);
      return null;
    }
  };

  export const deleteNote = async (userId: string, noteId: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/users/${userId}/notes/${noteId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return true;
    } catch (error) {
      console.error("Could not delete note:", error);
      return false;
    }
  };
