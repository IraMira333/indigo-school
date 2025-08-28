"use client";
import { useState } from "react";

import { FormInModalProps } from "@/types/contentTypes";
import { PrivacyPolicy } from "../footer/PrivacyPolicy";
import { ButtonGet } from "../shared/ButtonGet";

const nameRegex =
    /^(?=(.*\S.*\S))[^\-\s][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻіІїЇґҐєЄа-яА-Я'"`\-\sʼ’]+$/;
const numberRegex = /^[0-9]+$/;

export const AplicationForm = ({ notificationHandler }: FormInModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        age: "",
        language: "",
        online: "",
        group: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        age: "",
        language: "",
        online: "",
        group: "",
    });
    const validate = () => {
        const newErrors: typeof errors = {
            name: "",
            phone: "",
            age: "",
            language: "",
            online: "",
            group: "",
        };
        let valid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Введіть ваше ім’я";
            valid = false;
        } else if (!nameRegex.test(formData.name)) {
            ((newErrors.name =
                "Допускаються літери, знаки дефіс, апостроф, лапки"),
                (valid = false));
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Введіть номер телефону";
            valid = false;
        } else if (!numberRegex.test(formData.phone)) {
            newErrors.phone = "Допускаються лише цифри";
            valid = false;
        }

        if (!formData.age.trim()) {
            newErrors.age = "Вкажіть вік дитини";
            valid = false;
        } else if (!numberRegex.test(formData.age)) {
            newErrors.age = "Допускаються лише цифри";
            valid = false;
        }
        if (!formData.language) {
            newErrors.language = "Оберіть мову навчання";
            valid = false;
        }
        if (!formData.online) {
            newErrors.online = "Оберіть формат навчання";
            valid = false;
        }
        if (!formData.group) {
            newErrors.group = "Оберіть форму навчання";
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;

        // const onSendData = async () => {
        //     const data = {
        //         name: formData.name,
        //         phone: formData.phone,
        //         age: formData.age,
        //     };

        //     await axios.post("/api/vacancy", data, {
        //         headers: { "Content-Type": "application/json" },
        //     });

        //     setFormData({
        //         name: "",
        //         phone: "",
        //         age: "",
        //         language: "",
        //         online: "",
        //         group: "",
        //     });
        // };

        // try {
        //     await notificationHandler(onSendData);
        // } catch (error) {
        //     console.error("Відправка не вдалася:", error);
        // }
    };

    const inputClass =
        "pc:mt-0 pc:mb-4 text-dark-bg bg-gray-custom placeholder:pc:text-lg pc:text-2xl pc:py-4 placeholder:text-gray-dark-custom border-gray-dark-custom block w-full rounded-xl border px-4 py-3 font-semibold group-focus:outline-none placeholder:text-sm placeholder:uppercase";
    const selectClass =
        "pc:mt-0 pc:mb-4 text-dark-bg bg-gray-custom placeholder:pc:text-lg pc:text-2xl pc:py-4 placeholder:text-gray-dark-custom border-gray-dark-custom  block w-full rounded-xl border px-4 py-3 font-semibold group-focus:outline-none placeholder:text-sm placeholder:uppercase";
    const errorClass = "text-error absolute bottom-[-20px] left-0 mt-1";

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-full flex-wrap justify-center gap-6 text-left"
        >
            <div className="group relative w-[45%] max-w-[350px] min-w-[280px]">
                <label htmlFor="name" className="sr-only">
                    Ваше ім’я
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Ваше ім’я*"
                    value={formData.name}
                    onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                    }
                    className={inputClass}
                    autoComplete="name"
                />
                {errors.name && <p className={errorClass}>{errors.name}</p>}
            </div>

            <div className="group relative w-[45%] max-w-[350px] min-w-[280px]">
                <label htmlFor="phone" className="sr-only">
                    Номер телефону
                </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="Номер телефону*"
                    value={formData.phone}
                    onChange={e =>
                        setFormData({ ...formData, phone: e.target.value })
                    }
                    className={inputClass}
                    inputMode="numeric"
                    autoComplete="tel"
                />
                {errors.phone && <p className={errorClass}>{errors.phone}</p>}
            </div>
            <div className="group relative w-[45%] max-w-[350px] min-w-[280px]">
                <label htmlFor="age" className="sr-only">
                    Вік дитини
                </label>
                <input
                    type="text"
                    id="age"
                    placeholder="Вік дитини*"
                    value={formData.age}
                    onChange={e =>
                        setFormData({ ...formData, age: e.target.value })
                    }
                    className={inputClass}
                    inputMode="numeric"
                />
                {errors.age && <p className={errorClass}>{errors.age}</p>}
            </div>
            <div className="group relative w-[45%] max-w-[350px] min-w-[280px]">
                <label htmlFor="language" className="sr-only">
                    Мова навчання
                </label>
                <select
                    id="language"
                    value={formData.language}
                    onChange={e =>
                        setFormData({ ...formData, language: e.target.value })
                    }
                    className={selectClass}
                >
                    <option value="" disabled></option>

                    <option value="англійська">Англійська</option>
                    <option value="німецька">Німецька</option>
                </select>
                {formData.language === "" && (
                    <span className="text-gray-dark-custom pc:text-lg pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm font-semibold uppercase">
                        Оберіть мову навчання*
                    </span>
                )}
                <span className="text-gray-dark-custom pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    ▼
                </span>
                {errors.language && (
                    <p className={errorClass}>{errors.language}</p>
                )}
            </div>
            <div className="group relative w-[45%] max-w-[350px] min-w-[280px]">
                <label htmlFor="online" className="sr-only">
                    Формат навчання
                </label>
                <select
                    id="online"
                    value={formData.online}
                    onChange={e =>
                        setFormData({ ...formData, online: e.target.value })
                    }
                    className={selectClass}
                >
                    <option value="" disabled></option>
                    <option value="онлайн">Онлайн</option>
                    <option value="офлайн">Офлайн</option>
                </select>
                {formData.online === "" && (
                    <span className="text-gray-dark-custom pc:text-lg pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm font-semibold uppercase">
                        Оберіть формат навчання*
                    </span>
                )}
                <span className="text-gray-dark-custom pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    ▼
                </span>
                {errors.online && <p className={errorClass}>{errors.online}</p>}
            </div>
            <div className="group relative w-[45%] max-w-[350px] min-w-[280px]">
                <label htmlFor="group" className="sr-only">
                    Форма навчання
                </label>
                <select
                    id="group"
                    value={formData.group}
                    onChange={e =>
                        setFormData({ ...formData, group: e.target.value })
                    }
                    className={selectClass}
                >
                    <option value="" disabled></option>
                    <option value="групова">Групова</option>
                    <option value="індивідуальна">Індивідуальна</option>
                </select>
                {formData.group === "" && (
                    <span className="text-gray-dark-custom pc:text-lg pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-sm font-semibold uppercase">
                        Оберіть форму навчання*
                    </span>
                )}
                <span className="text-gray-dark-custom pointer-events-none absolute inset-y-0 right-4 flex items-center">
                    ▼
                </span>
                {errors.group && <p className={errorClass}>{errors.group}</p>}
            </div>
            <div className="">
                <div className="mb-8 flex gap-2 text-sm">
                    <div>
                        <span className="bg-blue-custom mt-1 block h-2 w-2"></span>
                    </div>
                    <div className="mx-auto max-w-[380px] text-left">
                        Надсилаючи форму ви автоматично погоджуєтесь, що
                        ознайомились з нашою{" "}
                        <span>
                            <PrivacyPolicy
                                form
                                policyButton="Політикою конфіденційності"
                            />
                        </span>
                    </div>
                </div>

                <div className="flex justify-center">
                    <ButtonGet type="submit" />
                </div>
            </div>
        </form>
    );
};
