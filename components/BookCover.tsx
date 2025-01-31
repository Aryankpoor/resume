import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';
type BookCoverVariant = 'extraSmall' | 'small' | 'medium' | 'regular' | 'wide';

const variantStyles: Record<BookCoverVariant,string> = {
    extraSmall: 'book-cover_extra_small',
    small: 'book-cover_small',
    medium: 'book-cover_medium',
    regular: 'book-cover_regular',
    wide: 'book-cover_large',
}

interface Props {
    className?: string;
    variant: "wide" | "small";
    coverColor: string;
    coverImage: string;
}

const BookCover = ({
    className,
    
}: Props) => {
  return 
    <></>
}

export default BookCover