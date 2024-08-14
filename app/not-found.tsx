import Link from 'next/link';
import style from './_styles/scss/main.module.scss'
import { inter, nunito } from "../app/_components/fonts";
import clsx from "clsx";
export default function NotFound() {
    return (
        <main className={style.wrapperError}>
            <div className={style.errors}>
                <h1 className={clsx(style.title, nunito.className)}>404</h1>
                <div className={style.text}>
                    <p className={clsx(style.text, nunito.className)}>Сторінка не <span >знайдена</span></p>
                </div>
                <Link
                    href="/" className={clsx(style.button, nunito.className)}
                >
                    до сторінки подій
                </Link>
                <div className={style.text_notFound} >
                    <p>Нам шкода, але ми не можемо знайти цю <br />сторінку, або вона більше не доступна.<br />Спробуй скристатись меню.</p>
                </div>
            </div>
        </main>
    );
}