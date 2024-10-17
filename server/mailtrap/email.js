import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";
import { errorHandler } from "../utils/error.js";

export const sendVerificationEmail = async (email, token, next) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", token),
      category: "Email Verification",
    });

    console.log(response);
  } catch (error) {
    next(errorHandler(error));
    console.log(error);
  }
};

export const sendWelcomeEmail = async (email, name, next) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "b65d9719-138c-481f-b9df-446a38057f31",
      template_variables: {
        name: name,
        company_info_name: "SJ Blog",
      },
    });
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    next(errorHandler(error));
    console.log(error);
  }
};

export const sendPasswordResetEmail = async (email, resetURL, next) => {
  const recipient = [{ email }];

  if (!email) return next(errorHandler(400, "Email is required"));

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });

    console.log("Password reset email sent successfully", response);
  } catch (error) {
    next(errorHandler(error));
    console.log(error);
  }
};

export const sendResetSuccessEmail = async (email, next) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password reset successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });

    console.log("Password reset success email sent successfully", response);
  } catch (error) {
    console.log(error);
    return next(errorHandler(error));
  }
};
