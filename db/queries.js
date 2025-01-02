import { pool } from "./pool.js";

export async function getAllCategory() {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows;
}

export async function insertCategory(category) {
    // Insert a new category into the database
    await pool.query("INSERT INTO categories (category_name) VALUES ($1)", [
        category,
    ]);
}

export async function deleteCategory(id) {
    // Delete a category by its ID
    await pool.query("DELETE FROM categories WHERE category_id = $1", [id]);
}

export async function updateCategory(id, newCategoryName) {
    // Update a category's name by its ID
    await pool.query(
        "UPDATE categories SET category_name = $1 WHERE category_id = $2",
        [newCategoryName, id]
    );
}
export async function getItemByCatId(id) {
    const { rows } = await pool.query(
        "SELECT * FROM items WHERE category_id = $1",
        [id]
    );
    return rows;
}
export async function getCatigoryItems(id) {
    const { rows, rowCount } = await pool.query(
        "SELECT * FROM items WHERE category_id = $1 ",
        [id]
    );
    return { rows, rowCount };
}
export async function getItemById(id) {
    const { rows } = await pool.query(
        "SELECT * FROM items WHERE item_id = $1", // Fix typo
        [id]
    );
    return rows; // Return the first row (single item)
}
