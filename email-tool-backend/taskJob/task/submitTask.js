import { findUserByEmail } from "./findUserByEmail.js";
import { fetchTaskAndBalance } from "../task/fetchTaskAndBalance.js";
import { allActivityLogger } from "../../utils/allActivitiesLogger.js";
import { updateTask } from "./updateTask.js";

export const submitTask = async (req, res) => {
  // compute login input credentials
  const { answer, taskId, reward } = req.validated.body;
  const id = req.id;

  try {
    // update
    await updateTask({ userId: id, taskId, reward });

    // fetch data
    const taskAndBalance = await fetchTaskAndBalance({ userId: id });

    //log  activityy
    await allActivityLogger({
      email: `Id - ${id}`,
      message: `task answer ${answer}`,
    });

    return res.status(200).json({
      success: true,
      taskAndBalance,
      message: "Task Submitted and Balance Updated!",
    });
  } catch (error) {
    //log error activityy
    await allActivityLogger({
      email: "submitTask@email.com",
      message: `task submited failed: ${error.message}`,
    });
    return res
      .status(500)
      .json({ success: false, message: "Failed to submit Task, try again." });
  }
};