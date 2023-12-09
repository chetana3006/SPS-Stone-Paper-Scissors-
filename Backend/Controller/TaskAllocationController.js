const TaskAllocation=require("../Models/TaskAllocation");
const Users=require("../Models/UserModel")

exports.AllocateTask = (req, res) => {
    const { experience, expert, noofuserswant } = req.body;

    Users.find().then((r) => {
            const users = r;
            const filteredUsers = users.filter(user => {
                const userExperience = parseInt(user.experience);
                const experienceMatch = !experience || userExperience === parseInt(experience);
                const expertMatch = !expert || user.expert.toLowerCase() === expert.toLowerCase();
                return experienceMatch && expertMatch;
            });

            // Get the number of users requested or the maximum available
            const usersToReturn = Math.min(filteredUsers.length, parseInt(noofuserswant) || filteredUsers.length);

            // Slice the filtered users array to get the desired number of users
            const selectedUsers = filteredUsers.slice(0, usersToReturn);

            // Return the selected users
            return res.json({ selectedUsers });
        })
        .catch((e) => {
            console.log(e);
            return res.status(500).json({ error: "Internal Server Error" });
        });
};
