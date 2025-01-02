import pkg from "statuses";
const { redirect } = pkg;
import {
    getAllCategory,
    insertCategory,
    updateCategory,
    getCatigoryItems,
} from "../db/queries.js";

export async function AllCategory(req, res) {
    try {
        const categories = await getAllCategory();
        console.log("Categories : ", categories);
        res.render("home", { categories });
    } catch (error) {
        console.error("Error fetching categories:", error.message);
        res.status(500).send("Error fetching categories");
    }
}
export async function categoryCreateGet(req, res) {
    res.render("viewCategory", { title: "User list" });
}
export async function categoryCreatePost(req, res) {
    const { category_name } = req.body;

    if (!category_name || typeof category_name !== "string") {
        return res.status(400).send("Invalid category name");
    }

    try {
        await insertCategory(category_name);
        res.redirect("/");
    } catch (error) {
        console.error("Error inserting category:", error.message);
        res.status(500).send("Error inserting category");
    }
}
export async function openCategory(req, res) {
    const categoryID = req.params.id;
    const categoryName = req.params.category_name;
    const { rows, rowCount } = await getCatigoryItems(categoryID);
    res.render("categoryItems", {
        items: rows,
        category_name: categoryName,
        rows: rowCount,
    });
}
export async function updateCategories(req, res) {
    const id = req.params.id;
    const category_name = req.body;
    await updateCategory(id, category_name);
    const categories = await getAllCategory();
    res.render("home", { categories });
    redirect("/");
}
