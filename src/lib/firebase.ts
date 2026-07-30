import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  deleteDoc, 
  getDoc,
  writeBatch
} from 'firebase/firestore';
import { SavedMenu, Ingredient } from '../types';
import firebaseConfig from '../../firebase-applet-config.json';

// Khởi tạo ứng dụng Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore với database ID từ tệp cấu hình
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId || '(default)');

// === TIỆN ÍCH QUẢN LÝ THỰC ĐƠN ĐÃ LƯU ===

const MENUS_COLLECTION = 'saved_menus';

/**
 * Lưu thực đơn vào Google Firestore
 */
export async function saveMenuToFirebase(menu: SavedMenu): Promise<void> {
  try {
    const docRef = doc(db, MENUS_COLLECTION, menu.id);
    await setDoc(docRef, menu);
    console.log(`Lưu thực đơn ${menu.id} thành công lên Firestore`);
  } catch (err) {
    console.error('Lỗi khi lưu thực đơn lên Firestore:', err);
    throw err;
  }
}

/**
 * Xóa thực đơn khỏi Google Firestore
 */
export async function deleteMenuFromFirebase(menuId: string): Promise<void> {
  try {
    const docRef = doc(db, MENUS_COLLECTION, menuId);
    await deleteDoc(docRef);
    console.log(`Xóa thực đơn ${menuId} thành công khỏi Firestore`);
  } catch (err) {
    console.error('Lỗi khi xóa thực đơn trên Firestore:', err);
    throw err;
  }
}

/**
 * Tải toàn bộ thực đơn đã lưu từ Google Firestore
 */
export async function getMenusFromFirebase(): Promise<SavedMenu[]> {
  try {
    const querySnapshot = await getDocs(collection(db, MENUS_COLLECTION));
    const menus: SavedMenu[] = [];
    querySnapshot.forEach((doc) => {
      menus.push(doc.data() as SavedMenu);
    });
    // Sắp xếp thực đơn mới nhất lên trên nếu có updatedAt
    return menus.sort((a, b) => {
      // Sắp xếp theo id hoặc thời gian tạo
      return b.id.localeCompare(a.id);
    });
  } catch (err) {
    console.error('Lỗi khi tải thực đơn từ Firestore:', err);
    return [];
  }
}

// === TIỆN ÍCH QUẢN LÝ CƠ SỞ DỮ LIỆU THỰC PHẨM ===

const INGREDIENTS_DOC = 'app_data/ingredients_catalog';

/**
 * Lưu toàn bộ danh mục thực phẩm tùy biến lên Google Firestore
 */
export async function saveIngredientsToFirebase(ingredients: Ingredient[]): Promise<void> {
  try {
    const docRef = doc(db, INGREDIENTS_DOC);
    await setDoc(docRef, { list: ingredients });
    console.log('Đồng bộ danh mục thực phẩm lên Firestore thành công');
  } catch (err) {
    console.error('Lỗi khi lưu danh mục thực phẩm lên Firestore:', err);
    throw err;
  }
}

/**
 * Tải danh mục thực phẩm từ Google Firestore
 */
export async function getIngredientsFromFirebase(): Promise<Ingredient[] | null> {
  try {
    const docRef = doc(db, INGREDIENTS_DOC);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data && Array.isArray(data.list)) {
        return data.list as Ingredient[];
      }
    }
    return null;
  } catch (err) {
    console.error('Lỗi khi tải danh mục thực phẩm từ Firestore:', err);
    return null;
  }
}
