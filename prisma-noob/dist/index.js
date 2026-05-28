import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function insertUser(username, password, firstname, lastname) {
    const res = await prisma.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });
    console.log(res);
}
insertUser("admin", "1231234", "priyanshu", "indra");
//# sourceMappingURL=index.js.map