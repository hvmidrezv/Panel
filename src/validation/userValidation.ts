import * as yup from "yup";
import type { NewUser } from "../types/user";

// Validation schema for user forms
export const userValidationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .max(100, "Email must not exceed 100 characters"),

  username: yup
    .string()
    .transform((value) => value || undefined)
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must not exceed 30 characters")
    .matches(
      /^[a-zA-Z0-9._-]*$/,
      "Username can only contain letters, numbers, dots, underscores, and hyphens",
    )
    .optional(),

  phone: yup
    .string()
    .transform((value) => value || undefined)
    .matches(
      /^$|^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
      "Invalid phone number format",
    )
    .optional(),

  website: yup
    .string()
    .transform((value) => value || undefined)
    .test("is-url", "Invalid URL format", (value) => {
      if (!value) return true;
      try {
        new URL(value.startsWith("http") ? value : `https://${value}`);
        return true;
      } catch {
        return false;
      }
    })
    .optional(),

  address: yup
    .object({
      street: yup
        .string()
        .transform((value) => value || undefined)
        .max(100, "Street must not exceed 100 characters")
        .optional(),
      suite: yup
        .string()
        .transform((value) => value || undefined)
        .max(50, "Suite must not exceed 50 characters")
        .optional(),
      city: yup
        .string()
        .transform((value) => value || undefined)
        .max(50, "City must not exceed 50 characters")
        .optional(),
      zipcode: yup
        .string()
        .transform((value) => value || undefined)
        .max(20, "Zipcode must not exceed 20 characters")
        .optional(),
      geo: yup
        .object({
          lat: yup
            .string()
            .transform((value) => value || undefined)
            .optional(),
          lng: yup
            .string()
            .transform((value) => value || undefined)
            .optional(),
        })
        .optional(),
    })
    .optional(),

  company: yup
    .object({
      name: yup
        .string()
        .required("Company name is required")
        .min(2, "Company name must be at least 2 characters")
        .max(100, "Company name must not exceed 100 characters"),
      catchPhrase: yup
        .string()
        .transform((value) => value || undefined)
        .max(200, "Catch phrase must not exceed 200 characters")
        .optional(),
      bs: yup
        .string()
        .transform((value) => value || undefined)
        .max(200, "BS must not exceed 200 characters")
        .optional(),
    })
    .required(),
});

export type UserFormData = NewUser;
